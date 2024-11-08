import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
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
        <View style = {styles.formGeral} > 
            <Text style={styles.formLabel}>Informe o lado do triângulo</Text>
            <TextInput  style={styles.formLabel}
                onChangeText={setSide}
                inputMode="numeric"
                value={side}
                placeholder = " "
            />

            <Pressable onPress={()=> opSide()} styles={styles.formButton}>
                <Text style={styles.formLabel}>Calcular</Text>
            </Pressable>

            <Text style={styles.formLabel}>{area}</Text>
        </View>    
    )
}
 const styles = StyleSheet.create ({
    formGeral:{
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30 
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },
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

 