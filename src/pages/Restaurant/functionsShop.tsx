import { useState } from "react";

import rectangle3 from '../../common/images/rectangle3.png';
import rectangle4 from '../../common/images/rectangle4.png';
import rectangle5 from '../../common/images/rectangle5.png';
import rectangle6 from '../../common/images/rectangle6.png';
import rectangle7 from '../../common/images/rectangle7.png';
import rectangle8 from '../../common/images/rectangle8.png';
import rectangle9 from '../../common/images/rectangle9.png';
import rectangle10 from '../../common/images/rectangle10.png';

interface Product {
    id: string;
    product: string;
    image: string;
    time: string;
    value: number;
    amount: number;
}

export function VerifyProducts (): Product[] {
    const aux = localStorage.getItem('products')

    if (!aux) {
        ResetProducts()
        return JSON.parse(localStorage.getItem('products') || '[]') as Product[];
    } else {
        return JSON.parse(aux) as Product[]
    }
}

export function ResetProducts () {
    const json = [
        {
            'id' : '1',
            'product' : 'Lorem ipsum',
            'image' : rectangle3,
            'time' : '45min',
            'value' : 32.00,
            'amount' : 0
        },
        {
            'id' : '2',
            'product' : 'Lorem ipsum',
            'image' : rectangle4,
            'time' : '30min',
            'value' : 16.00,
            'amount' : 0
        },
        {
            'id' : '3',
            'product' : 'Lorem ipsum',
            'image' : rectangle5,
            'time' : '60min',
            'value' : 56.00,
            'amount' : 0
        },
        {
            'id' : '4',
            'product' : 'Lorem ipsum',
            'image' : rectangle6,
            'time' : '60min',
            'value' : 34.00,
            'amount' : 0
        },
        {
            'id' : '5',
            'product' : 'Lorem ipsum',
            'image' : rectangle7,
            'time' : '50min',
            'value' : 40.00,
            'amount' : 0
        },
        {
            'id' : '6',
            'product' : 'Lorem ipsum',
            'image' : rectangle8,
            'time' : '10min',
            'value' : 25.00,
            'amount' : 0
        },
        {
            'id' : '7',
            'product' : 'Lorem ipsum',
            'image' : rectangle9,
            'time' : '5min',
            'value' : 6.00,
            'amount' : 0
        },
        {
            'id' : '8',
            'product' : 'Lorem ipsum',
            'image' : rectangle10,
            'time' : '30min',
            'value' : 16.00,
            'amount' : 0
        }
    ] 

    localStorage.setItem('products', JSON.stringify(json))
}

interface UpdateProductsProps{
    id: string | undefined;
    amountProduct: number;
}

export function UpdateProducts ({ id, amountProduct }: UpdateProductsProps) {
    const aux = localStorage.getItem('products')

    if (aux) {
        const objJson = JSON.parse(aux)

        for (let i = 0; i < objJson.length; i++) {
            const product = objJson[i];
            if (id == product['id']) {
                product['amount'] = amountProduct
            }
        }
        localStorage.setItem('products', JSON.stringify(objJson))
    }
}

export function CheckAmount () {
    const jsonProducts = VerifyProducts()

    let display = false

    jsonProducts.forEach(product => {
        if (product.amount > 0) {
            display = true
        }
    });

    return display
}
