import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { SimpleButton } from '../../components/SimpleButton';

import {
    Container,
    Display,
    ButtonsWrapper,
    SmallText,
    Result,
    Calculation,
} from './styles';

export function Calculadora() {
    const theme = useTheme();
    const [calculation, setCalculation] = useState('');
    const [result, setResult] = useState(0);

    function addCalculation(value:string) {
        if(['*','+','-','/'].includes(value) && ['*','+','-','/'].includes(calculation.substring(calculation.length, calculation.length -1))) {
            return
        }

        if(['*','+','-','/'].includes(value) && result !== 0 && calculation.length == 0) {
            const resultConverted = String(result);
            setCalculation(resultConverted + value);
            return
        }
        setCalculation(oldState => oldState += value);
    }

    function calculate() {
        setResult(eval(calculation));
        setCalculation('');
    }

    function erase() {
        if(calculation.length == 0) return;

        const newValue = calculation.substring(0, calculation.length-1);
        setCalculation(newValue);
    }

    return (
        <Container>
            <Display>
                <SmallText>Resultado</SmallText>
                <Result>{result}</Result>
                <Calculation>{calculation}</Calculation>
            </Display>

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