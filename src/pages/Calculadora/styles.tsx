import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight()+10}px;
    background-color: ${({ theme }) => theme.colors.light_blue};
`;

export const Display = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 20px;

    background-color: ${({ theme }) => theme.colors.light_blue};

    border-bottom-width: 1px;
    border-color: #333;
`;

export const ButtonsWrapper = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
`;

export const SmallText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_400};
    font-size: ${RFValue(16)}px;
    text-align: right;
`;

export const Result = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_500}; 
    font-size: ${RFValue(50)}px; 
    text-align: right;
`;

export const Calculation = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_400};
    font-size: ${RFValue(25)}px;
    text-align: right;

    margin-top: 28px;
`;