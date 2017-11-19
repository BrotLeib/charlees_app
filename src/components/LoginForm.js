import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginUserFail, loginUserSuccess, profileLoad, productsLoad, loadAllProfileData } from '../actions';
import axios from 'axios';

class LoginForm extends Component {

  constructor() {
    super();
    this.STORAGE_KEY = 'token_id';
    
  }
  
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  
  userLogin() {
      this.props.loginUser();

      fetch("http://10.0.2.2:8000/api/api-token-auth/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.props.email,
          password: this.props.password,
        })
        }).then((response) => response.json()
        ).then((jResponse) => {
          this._onValueChange('token_id', jResponse.token);
          this.props.loginUserSuccess();
          this.props.loadAllProfileData(this.props.navigation);
        })
        //.then(this.props.navigation.navigate('MainMenue'))
        .catch((error) => {
          console.log(error);
          this.props.loginUserFail();
          })   
    }

    renderButton() {
      if (this.props.loading) {
        return <Spinner size="large" />;
      } else {
        return (
          <Button
            onPress={this.userLogin.bind(this)}
            style={styles.buttonStyle}>
            Login
          </Button>
        );
      }
    }

  render() {
      const { navigate } = this.props.navigation;
      const { cardStyle, textStyle, sectionStyle, buttonSectionStyle, linkStyle, buttonStyle } = styles;
      return (
        <Card style={cardStyle}>
          <Text style={textStyle}>
            {`Schon Mitglied? \n Registriere dich jetzt`}
          </Text>
          <CardSection style={sectionStyle}>
            <Input 
              label="Email"
              placeholder="email@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection style={sectionStyle}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection style={buttonSectionStyle}>
            {this.renderButton()}
          </CardSection>
          <CardSection style={buttonSectionStyle}>
            <Button
            onPress={null}
            style={buttonStyle}>
            Registrieren
          </Button>
          </CardSection>
          <Text style={linkStyle}>Password vergessen?</Text>
        </Card>
      );
    }
  }

const styles = {
  buttonSectionStyle: {
    marginBottom: 10,
    backgroundColor: '#D98324',
  },
  buttonStyle: {
    marginLeft: 50,
    marginRight: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20},
    opacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  cardStyle: {
    justifyContent: 'center',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  linkStyle: {
    color: 'blue',
    fontSize: 12,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 50,
    fontSize: 24,
  },
  sectionStyle: {
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#ffd07b',
    marginLeft: 3,
    marginRight: 3,
  },
  
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return({
    email,
    password,
    loading, 
    error,
  });
};

export default connect(mapStateToProps, {emailChanged, 
  passwordChanged, loginUser, loginUserFail, loginUserSuccess, profileLoad, productsLoad, loadAllProfileData})(LoginForm)
// *Arguments * first: mapStateToProps * second argument: actions * third: component

  

