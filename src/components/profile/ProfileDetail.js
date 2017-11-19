import React, {Component} from 'react';
import { FlatList, ListView, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, Button } from '../common';
import { profileLoad, productsLoad } from '../../actions';
import ListItem from './ListItem';
import ProfileHead from './ProfileHead';

// import { Button } from 'react-native-elements';


class ProfileDetail extends Component {
    
    renderRow(item) {
        return(
                <ListItem 
                    item={item}
                />
        );
    }

render() {
        return (
            
            <Card>
            
            <ProfileHead />
            <Text style={styles.textStyle}>Deine Produkte</Text>
            <FlatList 
                data={this.props.products}
                renderItem={({item}) => (
                <ListItem 
                    item={item}
                    navigation={this.props.navigation}
                />
                )}
                keyExtractor={item => item.uuid}
            />
            </Card>

            
        );
    }
}

const mapStateToProps = ({ profile_data }) => {
    const { profile, products } = profile_data;
    return {
        products: products,
        profile: profile,
    };
};

export default connect (mapStateToProps, {productsLoad})(ProfileDetail);

const styles = {
    listStyle: {
        paddingTop: 5,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',

    }
}