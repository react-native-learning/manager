import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  Button,
  TouchableHighlight
} from 'react-native';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as Actions from "../../actions";

import currencyUlti from '../../utils/currencyUlti';

import { HeaderComp, FooterComp } from '../../components/common'

class HomeScreen extends Component {

  state = {
    country: 'Romania',
    uri: require('./images/romania-icon.png'),
    allCurrency: [],

    selected: {
      currencyFrom: {
        unit: '',
        flg: ''
      },
      currencyTo: {
        unit: '',
        flg: ''
      },
    }
  }

  constructor(props) {
    super(props);

    let getAllCurrency = new Promise((res) => {
      // setTimeout(() => {
      res(currencyUlti.getAllCurrency());
      // }, 2000);
    })

    getAllCurrency.then(res => {
      console.log('res', res);
      this.setState({
        allCurrency: res.currencies,
        selected: {
          currencyFrom: {
            unit: res.currencies[0].unit,
            flg: res.currencies[0].flg,
          },
          currencyTo: {
            unit: res.currencies[0].unit,
            flg: res.currencies[0].flg,
          }
        }
      });
      // console.log('this.state.selected', this.state.selected);
    })
  }

  _onChangeCurrencyFrom(currencyFrom) {
    // console.log('this.state 1', this.state);
    // console.log('currencyTo', currencyTo);
    this.setState({
      selected: {
        currencyFrom: {
          unit: currencyFrom.unit,
          flg: currencyFrom.flg
        },
        currencyTo: {
          unit: this.state.selected.currencyTo.unit,
          flg: this.state.selected.currencyTo.flg
        }
      }
    })
    // console.log('this.state 2', this.state);
  }

  _onChangeCurrencyTo(currencyTo) {
    // console.log('this.state 1', this.state);
    // console.log('currencyTo', currencyTo);
    this.setState({
      selected: {
        currencyFrom: {
          unit: this.state.selected.currencyFrom.unit,
          flg: this.state.selected.currencyFrom.flg
        },
        currencyTo: {
          unit: currencyTo.unit,
          flg: currencyTo.flg
        }
      }
    })
    // console.log('this.state 2', this.state);
  }

  _onGoToResult() {
    // TODO check selected
    console.log('home:_onGoToResult');
    this._onSetCurrencySelected();
    this.props.goToResult();
  }

  _onSetCurrencySelected() {
    this.props.setCurrencySelected({
      currencyFrom: this.state.selected.currencyFrom,
      currencyTo: this.state.selected.currencyTo
    });
  }

  render() {
    var list = this.state.allCurrency.map((item, index) => {
      console.log('item', item);
      // var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <Picker.Item key={index} label={item.country} value={item.unit} />
      )
    });

    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./images/logo.png')} />
          <Text style={styles.textBold}>Easy Change</Text>
          <Image style={styles.menu_image} source={require('./images/if_menu.png')} />
        </View>
        {/* contain */}
        <View style={styles.contain}>
          {/* form-1*/}
          <View style={styles.select1}>
            <View style={styles.form_continuer}>

              <View style={styles.select_1}>
                <Text style={styles.form_continuer_text}>Je souhaite changer des</Text>
                <View style={styles.contain_picker}>
                  {console.log('flg currencyFrom', this.state.selected.currencyFrom.flg)}
                  <Image style={styles.menu_icon} source={{ uri: this.state.selected.currencyFrom.flg }} />
                  <View style={styles.picker}>
                    {console.log('sssssssss currencyFrom', this.state.selected.currencyFrom.unit)}
                    <Picker
                      selectedValue={this.state.selected.currencyFrom.unit}
                      onValueChange={(itemValue, itemIndex) => {
                        this._onChangeCurrencyFrom(this.state.allCurrency[itemIndex])
                      }}
                    >
                      {list}
                    </Picker>
                  </View>
                </View>
              </View>

              <View style={styles.select_1}>
                <Text style={styles.form_continuer_text}>En</Text>
                <View style={styles.contain_picker}>
                  {console.log('flg currencyTo', this.state.selected.currencyTo.flg)}
                  <Image style={styles.menu_icon} source={{ uri: this.state.selected.currencyTo.flg }} />
                  <View style={styles.picker}>
                    {console.log('sssssssss currencyTo', this.state.selected.currencyTo.unit)}
                    <Picker
                      selectedValue={this.state.selected.currencyTo.unit}
                      onValueChange={(itemValue, itemIndex) =>
                        this._onChangeCurrencyTo(this.state.allCurrency[itemIndex])
                      }
                    >
                      {list}
                    </Picker>
                  </View>
                </View>
              </View>

              <View style={styles.select_1}>
                <View style={styles.buttonContainer}>
                  <Button scolor="#009EDF" title="CONTINUER"
                    onPress={() => {

                      console.log('Button:CONTINUER');
                      this._onGoToResult()
                    }} />
                </View>
              </View>

            </View>
          </View>
          {/* form-2*/}
          <View style={styles.select2}>
            <View style={styles.form_2}>
              <View style={styles.select_1}>
                <View style={styles.form_2_button}>
                  <Image style={styles.form_2_icon} source={require('./images/graph-icon.png')} />
                  <View style={styles.picker}>
                    <Text>SUIVRE LE COURS DE LA ROUPIE</Text>
                  </View>
                </View>
              </View>

              <View style={styles.select_1}>
                <View style={styles.form_2_button}>
                  <Image style={styles.form_2_icon} source={require('./images/convert-icon.png')} />
                  <View style={styles.picker}>
                    <Text>CONVERTIR UN MONTANT</Text>
                  </View>
                </View>
              </View>

              <View style={styles.select_1}>
                <View style={styles.form_2_button}>
                  <Image style={styles.form_2_icon} source={require('./images/location-icon.png')} />
                  <View style={styles.picker}>
                    <Text>NOS AGENCES</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <FooterComp />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfeff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});