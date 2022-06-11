import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components';
import { SimpleButton } from '../../components/SimpleButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Display,
    ButtonsWrapper,
    SmallText,
    Result,
    Calculation,
} from './styles';
import { Alert } from 'react-native';

export function Calculadora() {
    const theme = useTheme();
    const [calculation, setCalculation] = useState('');
    const [result, setResult] = useState(0);

    // Função para adicionar um número ou operação na conta
    function addCalculation(value:string) {
        // Evita adicionar duas operações em sequência
        if(['*','+','-','/'].includes(value) && ['*','+','-','/'].includes(calculation.substring(calculation.length, calculation.length -1))) return;

        // Caso ja tenha um resulta de uma conta anterior e o 
        // usuário insere uma operação ele pega o resultado
        // anterior e adiciona a operação
        if(['*','+','-','/'].includes(value) && result !== 0 && calculation.length == 0) {
            const resultConverted = String(result);
            setCalculation(resultConverted + value);
            return
        }
        // Fluxo comum adicionando o valor escolhido com o
        // restante do cálculo
        setCalculation(oldState => oldState += value);
    }

    // Função que realiza o cálculo
    async function calculate() {
        // Evita o cálculo caso o usuário não tenha escolhido nada;
        // Evita o cálculo caso o último caracter seja um operador
        if(calculation.length == 0 || ['*','+','-','/'].includes(calculation.substring(calculation.length, calculation.length -1))) return;

        // Realiza o cálculo
        const resultTemp = eval(calculation);

        // Chave do armazenamento interno
        const keyAsyncStorage = '@calculadora.univali';

        try {
            // Recupera o valor armazenado
            const oldValue = await AsyncStorage.getItem(keyAsyncStorage);
            let newValues = [];
            // Verifica se está null
            if(oldValue !== null) {
                // Caso não esteja ele converte para JSON o resultado e adiciona em um array
                newValues = JSON.parse(oldValue);
            }
            // Cria o objeto novo e adiciona no array com os demais cálculos
            newValues.push({
                id: uuid.v4(),
                calc: `${calculation} = ${resultTemp}`,
                date: new Date()
            });
            // Converte os dados para string
            const newJsonValue = JSON.stringify(newValues);
            // Grava os dados no armazenamento
            await AsyncStorage.setItem(keyAsyncStorage, newJsonValue);
        } catch (e) {
            // Alerta o usuário sobre um erro durante a operação
            Alert.alert('Erro', 'Houve um erro ao tentar gravar os dados na memória. Reporte o erro ao desenvolvedor.');
        }
        
        // Mostra o resultado na tela
        setResult(resultTemp);
        // Limpa o campo de cálculo
        setCalculation('');
    }

    // Função para apagar o último caracter
    function erase() {
        // Evita a tentativa de apagar caso o usuário não tenha digitado nada
        if(calculation.length == 0) return;

        // Apagar o último caracter e armazena o valor na constante
        const newValue = calculation.substring(0, calculation.length-1);
        // Mostra o calculo sem o último caracter
        setCalculation(newValue);
    }

    return (
        <Container>
            {/* Dados da conta */}
            <Display>
                <SmallText>Resultado</SmallText>
                <Result>{result}</Result>
                <Calculation>{calculation}</Calculation>
            </Display>

            {/* Botões da calculadora */}
            <ButtonsWrapper>
                <SimpleButton action={addCalculation} value="7" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="8" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="9" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="/" color={theme.colors.blue}/>
                <SimpleButton action={addCalculation} value="4" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="5" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="6" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="*" color={theme.colors.blue}/>
                <SimpleButton action={addCalculation} value="1" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="2" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="3" color={theme.colors.white}/>
                <SimpleButton action={addCalculation} value="-" color={theme.colors.blue}/>
                <SimpleButton action={addCalculation} value="0" color={theme.colors.white}/>
                <SimpleButton action={erase} value="$ERASE$" color={theme.colors.red}/>
                <SimpleButton action={calculate} value="=" color={theme.colors.orange}/>
                <SimpleButton action={addCalculation} value="+" color={theme.colors.blue}/>
            </ButtonsWrapper>
        </Container>
    );
}