import React from "react";
import { TextInput, View } from "react-native";


export function Login(){

    return(
        <View> 
            <TextInput
                placeHolder="E-mail"
            />
            <TextInput
                placeHolder="Senha"
            />
        </View>
    
    )
}