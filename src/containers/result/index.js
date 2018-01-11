import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native';
import { Container, Header, Footer, Content, List, ListItem, Thumbnail, Text, Body, Item, Input, Icon } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as Actions from "../../actions";
import { HeaderComp, FooterComp } from '../../components/common';
import currencyUlti from '../../utils/currencyUlti';

class Result extends Component {

  state = {
    activeSwitch: 1,

    rateFrom: '',
    rateTo: '',
    amount: ''
  };

  constructor(props) {
    super(props);

    console.log('this.props.currency', this.props.currency);

    let getExchangeRate = new Promise((res) => {
      // setTimeout(() => {
      res(currencyUlti.getExchangeRate(
        this.props.currency.currencyFrom,
        this.props.currency.currencyTo
      ));
      // }, 2000);
    })

    getExchangeRate.then(res => {
      console.log('res', res);
      this.setState({
        rateFrom: res.rateFrom,
        rateTo: res.rateTo
      });
    })
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

        <Container style={styles.wrapper}>
          <View style={{ flex: 2 }}>
            <Item style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={{ textAlign: 'left', fontSize: 11, flex: 6 }}>Mise a jour2016-09-05 UTC</Text>
            </Item>
          </View>
          <View style={{ marginBottom: '2%', justifyContent: 'center', alignItems: 'center', }}>
            <Item style={{ borderColor: '#ffffff' }}>
              <Text style={{ paddingRight: '2%', fontWeight: 'bold', }}>Cash</Text>
              <ToggleSwitch
                isOn={false}
                onColor='#009edf'
                offColor='#009edf'
                size='medium'
                onToggle={(isOn) => console.log('changed to : ', isOn)}
              />
              <Text style={{ paddingLeft: '2%', color: '#89898a' }}>Verement</Text>
            </Item>
          </View>
          <View style={{ flex: 6 }}>
            <Item style={styles.wrap}>
              <Thumbnail square size={20} source={{ uri: this.props.currency.currencyFrom.flg }}
                style={styles.img} />
              <Text style={styles.text}>{this.props.currency.currencyFrom.unit}</Text>
              <Input placeholder='SaiSir Un montant' style={styles.textInput}
                
              />
              <Text style={styles.textrigh}>{this.props.currency.currencyFrom.unit}</Text>
            </Item>
            <Item style={styles.wrap}>
              <Thumbnail square size={40} source={{ uri: this.props.currency.currencyTo.flg }}
                style={styles.img} />
              <Text style={styles.text}>{this.props.currency.currencyTo.unit}</Text>
              <Input placeholder='' style={styles.textInput} />
              <Text style={styles.textrigh}>{this.props.currency.currencyTo.unit}</Text>
            </Item>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ marginTop: '5%', textAlign: 'center', color: '#5fa0c9', }}>Taux de change</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 35, textAlign: 'center' }}>
                1,00
                <Text style={{ fontSize: 12, }}>
                  {this.props.currency.currencyFrom.unit}
                </Text>
                <Text style={{ fontSize: 24, paddingLeft: '6', paddingRight: '6' }}>
                  =
            </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 35 }}>
                  {this.state.rateFrom}
                </Text>
                <Text style={{ fontSize: 12, }}>
                  {this.props.currency.currencyTo.unit}
                </Text>
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#89898a' }}>
                1,00
                <Text style={{ fontSize: 12, color: '#89898a' }}>
                  {this.props.currency.currencyTo.unit}
                </Text>
                <Text style={{ fontSize: 24, marginLeft: '5%', color: '#89898a' }}>
                  =
            </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#89898a' }}>
                  {this.state.rateTo}
                </Text>
                <Text style={{ fontSize: 12, }}>
                  {this.props.currency.currencyFrom.unit}
                </Text>
              </Text>

            </View>
          </View>
          <View style={[styles.footer]}>
            <View style={[styles.bgButton3]}>
              <Item>
                <Image source={require('./images/icon-bottom.png')} />
                <Text style={{ textAlign: 'center', color: '#6fa8cd', paddingLeft: '2%' }}>Suivere Lorem Hello Word ></Text>
              </Item>
            </View>
            <View style={[styles.bgButton2]}>
              <Text style={styles.textButton2}>SIMULER UN TAX</Text>
            </View>

            <View style={[styles.bgButton]}>
              <Text style={styles.textButton}>COMMANDER</Text>
            </View>

          </View>

        </Container>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav,
    currency: state.currency
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
    // flex: 1,
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
  footer: { flex: 4, flexDirection: 'column', },
  bgButton: {
    backgroundColor: '#009edf',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginTop: '3%',
  },
  bgButton2: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgButton3: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: { color: '#ffffff', textAlign: 'center' },
  textButton2: { color: '#333333', textAlign: 'center' },
  text: {
    fontSize: 8,
    marginLeft: '3%',
    paddingTop: 2,
  },
  textrigh: {
    marginRight: '3%',
    fontSize: 11,
    textAlign: 'right'
  },

  textInput: {
    textAlign: 'center',
    color: '#cccccc'
  },
  img: {
    width: '10%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrap: {
    borderTopWidth: 1,
    borderColor: '#cccccc',
    paddingBottom: '2%',
    paddingTop: '2%',
  },

  wrapper: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
  },
  img: {
    width: 50,
    height: 50
  }
};