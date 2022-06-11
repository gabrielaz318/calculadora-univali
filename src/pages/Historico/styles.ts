import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
    padding-top: ${getStatusBarHeight()+10}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_500};
    font-size: ${RFValue(22)}px;

    margin-bottom: 30px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_400};
    font-size: ${RFValue(16)}px;
    text-align: center;
`;

export const Divider = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-color: #333;
    height: 1px;

    margin: 16px 0;
`;