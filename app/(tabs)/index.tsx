import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState('');
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

// para estilizar, podemos abrir uma style em cada trecho (view é um componente, a outro view é outro componente, não é universal)
{/* <View style(getBackgroundColorAsync)></View> */}


    return (
        <View style={styles.formContext}>
{/* estamos acessando a propriedade criada "formContext:{...}" e atribuindo tudo dentro dela para essa style nesse objeto View */}
            <View style={styles.form}>
                <Text style={styles.formLabel}>ALtura:</Text>
                {/* <!---dados dentro dela mesmo---> */}
                <TextInput 
                    placeholder="Ex. 1.75"
                    value={height}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    placeholder="Ex. 67.5"
                    value={weight}
                    style={styles.formInput}
                />

                <Pressable onPress = {()=>validatorImc()} style={styles.formButton}>
                    <Text style={styles.formButtonText}>Calcular</Text>
                </Pressable>
                  {/* botão, tem um texto nele  */}

                <Text style={styles.formLabelImc}>{imc}</Text>

                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
//o padding é a borda interna de um componente
// margin é a borda entre um conteúdo e outro

//RELEMBRANDO< TEM QUE COLOCAR EM TODOS OS OBJETOS USADOS NESSE COMPONENTE, CADA ABERTURA DE 
//OBJETO RECEBE O SEU STYLE ESPECIFICO
    formContext: {
// CADA ABERTURA DESSASCHAVES SÃO AS PROPRIEDADES DE ESTILIZAÇÃO
//ISTO É, ao chamar a style={}, passamos a const Styles
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30 
    }, //view mais geral
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    }, // 
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    }, // para aquelas caixas de texto
    formInput:{
        width: "90%",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        margin:12,
        paddingLeft: 10,
    }, //style para inputs
    formButton:{
        borderRadius:50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 12,
        margin: 30,        
    }, //style para botões
    formButtonText:{
        fontSize: 20,
        color:"#fff"
    },
    formLabelImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width:"100%"
    }
})
// operador ternario:
// true? seTrue : seFalse
// se verdade, executa x, se n, executa y

// $Nome = 1>10? "Léo" : "Leonardo"
// 1 n é maior que 10, então nome recebe leonardo pois é falso

// nullsaveoperator???????