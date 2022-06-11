import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, FlatList, View } from 'react-native';
import { ItemList } from '../../components/ItemList';

import {
    Container,
    Title,
    Divider,
    Text,
} from './styles';

interface IListCalc {
    id: string;
    calc: string;
    date: Date;
}

export function Historico() {
    const [listCalc, setListCalc] = useState<IListCalc[]>([] as IListCalc[]);

    // Recupera cálculos
    async function getItemsList() {
        try {
            // Chave do armazenamento interno
            const keyAsyncStorage = '@calculadora.univali';
            // Recupera itens armazenados
            const value = await AsyncStorage.getItem(keyAsyncStorage)
            // Verifica se o valor retornado é null
            if(value !== null) {
                // Converte o valores para JSON    
                const newValue = JSON.parse(value);
                // Grava os dados recuperados para o usuário ver
                setListCalc(newValue);
                return
            }
        } catch(e) {
            // Exibe um alerta para usuário em caso de erro
            Alert.alert('Erro', 'Houve um erro ao tentar recuperar os dados na memória. Reporte o erro ao desenvolvedor.');
        }
    }

    // Função para apagar um item
    async function deleteItem(id:string) {
        try {
            // Chave do armazenamento interno
            const keyAsyncStorage = '@calculadora.univali';
            // Recupera o dados armazenados
            const value = await AsyncStorage.getItem(keyAsyncStorage);
            // Verifica se o valor é null
            if(value !== null) {
                // Converte o valor para JSON
                const newValue = JSON.parse(value);
                // Filtra todos os itens que o id seja diferente do recebido pela função
                const filteredValue = newValue.filter((item: IListCalc) => item.id !== id);
                // Convete para string os dados filtrados
                const filteredValueJson = JSON.stringify(filteredValue);
                // Grava os novos itens no armazenamento
                await AsyncStorage.setItem(keyAsyncStorage, filteredValueJson);
                // Adiciona os novos valor para o usuário poder visualizar
                setListCalc(filteredValue);
                return
            }
        } catch (error) {
            // Exibe um alerta para usuário em caso de erro
            Alert.alert('Erro', 'Houve um erro ao tentar deletar o registro da memória. Reporte o erro ao desenvolvedor.');
        }
    }

    // Executa toda vez que o usuário acessar a tela
    useFocusEffect(useCallback(() => {
        // Chama a função para recuperar o itens
        getItemsList();
    },[]))

    return (
        <Container>
            {/* Titulo da tela */}
            <Title>Histórico de cálculos</Title>

            {/* Aviso caso não seja encontrado nenhum resultado gravado */}
            {!listCalc.length && <Text>Nenhum cálculo encontrado</Text>}

            {/* Renderiza os itens gravados */}
            <FlatList 
                data={listCalc}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemList deleteItem={deleteItem} data={item} />
                )}
                ItemSeparatorComponent={() => (
                    <Divider />
                )}
                
            />
        </Container>
    );
}