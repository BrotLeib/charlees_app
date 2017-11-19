import React from 'react';
import { View } from 'react-native';

const InputWrapper = (props) => {
    return (
        <View style={[styles.wrapperStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    wrapperStyle: {
        padding: 5,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        opacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
    }
};

export { InputWrapper };