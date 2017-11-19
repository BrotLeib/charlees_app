import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, Input, InputCol, CardSection, Button, InputWrapper } from '../components/common';
import { numberChanged, numberLookup } from '../actions';

class SearchBar extends Component {

    onNumberChange(text) {
        this.props.numberChanged(text)
    }

    onButtonPress() {
        const { number } = this.props;
        this.props.numberLookup({ number });
    }


    renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        } else {
          return (
            <Button
              onPress={this.onButtonPress.bind(this)}
              style={styles.buttonStyle}>

              Check
            </Button>
          );
        }
      }

    render() {
        return(
            <Card style={styles.cardStyle}>
                <Text style={styles.textStyle}>
                    {`Tippe hier\n die Nummer eines Charlees ein`}
                </Text>
                <InputWrapper>
                    <InputCol 
                    placeholder="xxx-xxx"
                    onChangeText={this.onNumberChange.bind(this)}
                    value={this.props.number}
                    />
                </InputWrapper>
                <CardSection style={styles.sectionStyle}>
                    {this.renderButton()}
                </CardSection>
          </Card>
        );
    }
}

const styles = {
    textStyle: {
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 20,
        fontSize: 24,
    },
    sectionStyle:{
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#D98324',
        
    },
    cardStyle: {
        justifyContent: 'center',
    },
    buttonStyle: {
        height: 30,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: "#e3b505",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        opacity: 0.9,
        shadowRadius: 5,
        elevation: 5,


    }
}

const mapStateToProps = ({ search }) => {
    const { number } = search;
    return({
        number: number,
    });
};

export default connect(mapStateToProps, {numberChanged, numberLookup})(SearchBar);