import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export function Calc(){
    const [side, setSide] = useState(''); 
    const[area, setArea] = useState('');

    function opSide(){
        if(side!=''){
            let calc = (((side*side)*Math. sqrt(3))/40).toFixed(2)
            setArea(calc);
            setSide('');
        }
    }

    return(
        <View> 
            <Text>Informe o lado do triângulo</Text>
            <TextInput
                onChangeText={setSide};
                inputMode="numeric";
                value={side}
                placeholder = "lembre-se que o equilatero tem lados iguais"
            />

            <Pressable onPress={opSide()}
            />

            <Text>area</Text>
        </View>    
    )
}