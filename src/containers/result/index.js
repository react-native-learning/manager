import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TextInput,
  Text,
  Button,
  TouchableHighlight
} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as Actions from "../../actions";

import { HeaderComp, FooterComp } from '../../components/common'

class Result extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   currencyInPut: 0,
    //   currencyOutPut: 0
    // }

    // let getExchangeRate = new Promise((res) => {
    //   // setTimeout(() => {
    //   res(currencyUlti.getExchangeRate(this.props.));
    //   // }, 2000);
    // })

    // getAllCurrency.then(res => {
    //   console.log('res', res);
    //   this.setState({
    //     allCurrency: res.currencies,
    //     selected: {
    //       currencyFrom: {
    //         unit: res.currencies[0].unit,
    //         flg: res.currencies[0].flg,
    //       },
    //       currencyTo: {
    //         unit: res.currencies[0].unit,
    //         flg: res.currencies[0].flg,
    //       }
    //     }
    //   });
    //   // console.log('this.state.selected', this.state.selected);
    // })
  }

  _onGoBack() {
    this.props.onGoBack('home');
  }

  render() {
    return (
      <View style={styles.container}>

        {/* TOTO HeaderComp */}
        <View style={styles.header}>
          <TouchableHighlight
            // transparent
            onPress={() => this._onGoBack()}>
            <Image style={styles.menu_image} source={require('../../assets/images/if_menu.png')} />
          </TouchableHighlight>
          <Text style={styles.textBold}>Easy Change</Text>
          <Image style={styles.menu_image} source={require('../../assets/images/if_menu.png')} />
          {/* <Icon name="menu" /> */}
        </View>

        {/* <TextInput
          placeholderTextColor="#FFF"
          placeholder="from currency"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.currencyInPut}
        />
        <TextInput
          placeholderTextColor="#FFF"
          placeholder="to currency"
          value={this.state.currencyOutPut}
          editable={false}
        /> */}


        <Text>
          {this.props.currencyInPut}
        </Text>
        <Text>
          {this.props.currencyOutPut}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Result);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfeff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'sta'
    alignItems: 'flex-start',
    backgroundColor: '#fdfeff',
    borderBottomWidth: 0,
    borderColor: '#000000',
    elevation: 10,
  },
  contain: {
    flex: 8,
    flexDirection: 'column',
    margin: 5
  },
  footer: {
    flex: 1,
    backgroundColor: '#fdfeff'
  },
  logo: {
    width: '13%',
    height: '70%',
    marginLeft: 10,
  },
  menu_image: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  menu_icon: {
    width: '15%',
    height: '80%',
    marginLeft: 20,
    marginRight: 10
  },
  form_2_icon: {
    width: '9%',
    height: '65%',
    marginLeft: 20,
    marginRight: 10
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4182bb'
  },
  select1: {
    flex: 1.3,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f4f9fd',
  },
  select2: {
    flex: 1,
    backgroundColor: '#F7FBFF',
  },
  select_1: {
    flex: 1,
  },
  contain_picker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7df3fe',
    margin: 10,
  },
  picker: {
    width: '75%'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  form_continuer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    marginTop: 15,
  },
  form_continuer_text: {
    color: '#276EB0',
    fontSize: 15,
    textAlign: 'center'
  },
  form_2_button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderWidth: 0.5,
  },
  form_2: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
};