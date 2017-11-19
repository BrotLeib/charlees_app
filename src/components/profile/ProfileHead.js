import React, { Component }  from 'react';
import { Text } from 'react-native';

import { CardSection } from '../common';



export default class ProfileHead extends Component {

    render() {
        const { sectionStyle } = styles;
        return(
            <CardSection style={sectionStyle}>
                <Text>Number of Products: 0</Text>
                <Text>Username</Text>
            </CardSection>
        );
    }

}

const styles = {
    sectionStyle: {
        paddingBottom: 30,
        paddingTop: 30,
        justifyContent: 'space-around',
        backgroundColor: '#D98324'
    }
}
