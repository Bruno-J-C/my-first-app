import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export function Form(){
    const[height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const[imc, setImc] = useState('');
// quando tem um campo de texto, ele pode estar preenchido ou vazio, o estado atualiza
// a height é uma const, nunca muda, mas ela tem uma função especial que deixa mudar, setHeight 

//usestate controla estado, define o estado inicial e define uma ferramenta que vai definir os seguintes estados
// o estado inicial é essa string vazia ('')

    function imcCalculator(){
        let totalImc = (weight/(height*height)).toFixed(2)
        // sabemos que se dividir um valor por outro, pode er que vire decimal, então colocamos o toFixed(2) para limitar
        // o numero de casas depois da virgulas (ele vai ser um float, é baseado em aproximação e não algo fixo como o decimal
        // logo, ele faz arredondamentos, o decimal segue a fidelidade exata, como usado em banco de dinheiro)
        
        setImc(totalImc)
// aq estamos exibindo a var, ela começou vazia pois useState('') está nulo.
//chamamos o setImc para atualizar o estado da var, estado esse que recebe totalImc 
    }

    function validatorImc(){
        if(weight != '' && height != ''){
            imcCalculator();
            setHeight('');
            setWeight('');
        }
            // se as duas vars estiverem vazias, então obriga a preencher os dados
    }


    return (
        <View>
            <View>
                <Text>ALtura:</Text>
                {/* <!---dados dentro dela mesmo---> */}
                <TextInput 
                    placeholder="Ex. 1.75"
                    value={height}
                />

                <Text>Peso:</Text>
                <TextInput
                    placeholder="Ex. 67.5"
                    value={weight}
                />

                <Pressable onPress = {()=>validatorImc()}>
                    <Text>Calcular</Text>
                </Pressable>

                <Text>{imc}</Text>
                {/* botão, tem um texto nele */}
                
            </View>
        </View>
    )
}

//operador ternario:
// true? seTrue : seFalse
// se verdade, executa x, se n, executa y

//$Nome = 1>10? "Léo" : "Leonardo"
//1 n é maior que 10, então nome recebe leonardo pois é falso

//nullsaveoperator???????