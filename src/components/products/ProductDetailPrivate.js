import React, {Component} from 'react';
import { ScrollView, Text, AsyncStorage, View } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import { profileLoad } from '../../actions';

export default class ProductDetailPrivate extends Component {

    getProfile() {
        if (typeof this.props.navigation.state.params == 'undefined') {
            const profile = {};
            return profile;
        } else {
            const profile = this.props.navigation.state.params;
            return profile;
        }
    }

    getUser() {
        if (typeof this.props.navigation.state.params == 'undefined') {
            const user = {email: '', products: []}
            return user;
        } else {
            const user = this.props.navigation.state.params.user;
            return user;
        }
    }

    render() {
        params = this.getProfile();
        user = this.getUser()
        // const { user } = params;
        // const { user } = this.props.navigation.state.params;
        return(
            <View>
            <Text>{ params.key }</Text>
            <Text>{ user.email }</Text>
            </View>
        );
    }
}


