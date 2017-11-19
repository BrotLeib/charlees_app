import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import ProfileDetail from './components/profile/ProfileDetail';
import SearchBar from './components/SearchBar';
import { Icon } from 'react-native-elements';
import ProductDetailPrivate from './components/products/ProductDetailPrivate';


export const ProductDetailNavigator = StackNavigator({

  // navigates between profile and private products via modal

  Profil: {
    screen: ProfileDetail,
    navigationOptions: {
        title: 'Profil',
        tabBarLabel: ({tintColor}) => 
        <Icon name='search' size={35} color={tintColor} />,
    },
  },
  ProductDetailPrivate: {
    screen: ProductDetailPrivate,
    navigationOptions: {
      title: 'Produkt',
    }
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

export const MainNavigator = TabNavigator({
  Profil: {
    screen: ProductDetailNavigator,
  },
  Guthaben: {
    screen: ProductDetailPrivate,
    navigationOptions: {
      tabBarLabel: ({tintColor}) => <Icon name='credit-card' size={35} color={tintColor} />,
  },
  },
  SucheMain: {
    screen: SearchBar,
    navigationOptions: {
      tabBarLabel: ({tintColor}) => <Icon name='search' size={35} color={tintColor} />,
  },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#ffffff',
    tintColor: '#ffffff',
    labelStyle: {
      paddingBottom: 10,
    },
    style: {
      backgroundColor: '#ffd07b',
    },
    iconStyle: {
      padding: 0,
      zIndex: 1,
    },
    showLabel: true,
  }
});


export const LoginNavigator = StackNavigator({
  LoginForm: {
      screen: LoginForm,
  },
  MainMenue: {
    screen: MainNavigator,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
}, {
  headerMode: 'none',
});

export const RootNavigator = TabNavigator({
  Suche: {
    screen: SearchBar,
    navigationOptions: {
        tabBarLabel: ({tintColor}) => <Icon name='search' size={35} color={tintColor} />,
    },
  },
  Login: {
    screen: LoginNavigator,
    navigationOptions: {
      tabBarLabel: ({tintColor}) => <Icon name='face' size={35} color={tintColor} />,
  },
  },
}, {
  initialRouteName: 'Login',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#ffffff',
    tintColor: '#ffffff',
    labelStyle: {
      paddingBottom: 10,
    },
    style: {
      backgroundColor: '#ffd07b',
    },
    iconStyle: {
      padding: 0,
      zIndex: 1,
    },
    showLabel: true,
  }
});
