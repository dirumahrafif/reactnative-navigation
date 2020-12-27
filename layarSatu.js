import React from 'react'
import { View, Text, Button } from 'react-native'

export default function layarSatu({navigation}) {
    return (
        <View style={{flex:1}}>
            <Text style={{
                color:'red',
                fontSize:50,
                alignItems:'center',
                justifyContent:'center'
            }}>Ini di Layar Satu</Text>
            <Button 
                title = "Berpindah ke Halaman Dua"
                onPress={()=>navigation.navigate('Dua',{
                    asal:'Layar Satu'
                })}
            />
        </View>
    )
}
