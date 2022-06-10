import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { css } from 'styled-components';
import styled from 'styled-components/native';
const { width } = Dimensions.get('screen');

interface IContainer {
    color ?: string;
}

export const Container = styled.TouchableOpacity<IContainer>`
    width: ${width/4}px;
    height: ${width/4}px;

    border-width: 1px;
    border-color: #333;

    ${({ color }) => !!color && css`background-color: ${color}`}
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto_400};
    font-size: ${RFValue(28)}px;
`;