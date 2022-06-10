import React from 'react';
import { Entypo } from '@expo/vector-icons';

import {
    Container,
    Text
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface ISimpleButton {
    value: string;
    color?: string;
    action: (value?: string) => void;
}

export function SimpleButton({ value, color, action }: ISimpleButton) {
    function handlePressButton() {
        switch (value) {
            case '=':
                action()
            break;
            case '$ERASE$':
                action()
            break;
            default:
                action(value)
        }
    }

    return (
        <Container onPress={handlePressButton} color={color} activeOpacity={.7}>
            {value == '$ERASE$' ? <Entypo name="erase" size={RFValue(28)} color="black" /> : <Text>{value}</Text>}
            
        </Container>
    );
}