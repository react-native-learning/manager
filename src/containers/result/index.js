import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TextInput,
  Text
} from 'react-native';

// import CurrencyUlti from '../../utils/currencyUlti';

export default class Result extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currencyInPut: 0,
      currencyOutPut: 0
    }

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

  render() {
    return (
      <View>
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