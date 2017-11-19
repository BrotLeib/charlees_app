import React, { Component } from 'react';
import { Text, View, } from 'react-native';

import { Card, Button } from 'react-native-elements';

import { CardSection } from '../common';
import { LeadColor } from '../../assets';


const ProductCard = ({item, navigation}) => {


    return (
        <Card
            containerStyle={{marginBottom: 10, marginTop: 0}}
            title='Fahrrad'>
            <CardSection style={styles.sectionStyle}>
                <Text>{ item.type }</Text>
                <Text>{ item.key }</Text>
            </CardSection>
            <CardSection style={styles.sectionStyle}>
                <Text>{ item.type }</Text>
                <Text>{ item.register_date }</Text>
            </CardSection>
            <Button
                icon={{name: 'code'}}
                backgroundColor={LeadColor}
                fontFamily='Lato'
                buttonStyle={{padding: 0, borderRadius: 5}}
                title='mehr...'
                onPress={()=>navigation.navigate('ProductDetailPrivate', item)}
                />
        </Card>
    );
}

const styles = {
    sectionStyle: {
    }
}

export default ProductCard;

