import React from 'react';
import { View, Text } from 'react-native'

const Card = (props, style) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2},
        // opacity: 0.9,
        // shadowRadius: 2,
        // elevation: 1,
        flex: 1,
        backgroundColor: '#D98324' ,
    }
};

export { Card };