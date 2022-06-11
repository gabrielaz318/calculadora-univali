import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Info,
    Calc,
    DateCalc,
    Button,
} from './styles';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

interface IList {
    id: string;
    calc: string;
    date: Date;
}

interface IItemList {
    data: IList;
    deleteItem: (id: string) => void;
}

export function ItemList({ data, deleteItem }: IItemList) {
    const theme = useTheme();
    
    // Função que chama outro função para deletar o item em questão
    function handleDeleteItem() {
        // Função para deletar passando o id
        deleteItem(data.id);
    }

    return (
        <Container>
            {/* Componente das informações */}
            <Info>
                <Calc>{data.calc}</Calc>
                <DateCalc>{format(new Date(data.date), "dd/MM/yyyy 'às' HH:mm")}</DateCalc>
            </Info>
            {/* Botão para deletar */}
            <Button onPress={handleDeleteItem}>
                <Feather name="trash-2" size={24} color={theme.colors.red}/>
            </Button>
        </Container>
    );
}