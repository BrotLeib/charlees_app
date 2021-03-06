import React from 'react';
import { Text, View, TextInput } from 'react-native';

const InputCol = ( {label, value, onChangeText, placeholder, secureTextEntry } ) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style = {containerStyle}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={inputStyle}
                value={value} 
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
                />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        textAlign: 'center',
        
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'column',
    },
};

export { InputCol };
