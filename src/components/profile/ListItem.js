import React, {Component } from 'react';
import { Text, TouchableOpacity,TouchableWithoutFeedback, View } from 'react-native';

import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { CardSection, Button } from '../common';
import { selectProduct } from '../../actions';
import ProductCard from './ProductCard';


class ListItem extends Component {


    renderDetail() {
        const { selectedProductId } = this.props;
        const { uuid } = this.props.item;
        
        if (selectedProductId === uuid) {
            console.log(this.props);
            return (
                <ProductCard 
                    item={this.props.item}
                    navigation={this.props.navigation}
                />
                
            );
        }
    }

    onButtonPress() {
        {navigation}
    }

    render ()  {
        const { sectionStyle } = styles;
        return (
            <TouchableOpacity
            onPress={() => this.props.selectProduct(this.props.item.uuid)}>
            <View>
                <CardSection style={sectionStyle}>
                        <Icon name='android' size={35} color='#000000' />
                        <Text>mehr...</Text>
                </CardSection> 
                {this.renderDetail()}
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    sectionStyle: {
        padding: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        opacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
    }
};

const mapStateToProps = ({ profile_data }, ownProps) => {
    const { selectedProductId } = profile_data;
    return {
       selectedProductId,
    }
}

export default connect(mapStateToProps, {selectProduct})(ListItem)