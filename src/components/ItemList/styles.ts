import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export const Info = styled.View`
    flex: 1;
`;

export const Calc = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_500};
    font-size: ${RFValue(16)}px;
`;

export const DateCalc = styled.Text`
    font-size: ${RFValue(13)}px;
    margin-top: 6px;
`;

export const Button = styled.TouchableOpacity`
    margin-left: 40px;
`;
