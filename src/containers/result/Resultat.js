import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';
import { Container, Header,Footer, Content, List, ListItem, Thumbnail, Text, Body,Item,Input,Icon  } from 'native-base';
import SwitchButton from './common/SwitchButton';
import ToggleSwitch from 'toggle-switch-react-native';
export default class Resultat extends Component {
    constructor () {
        super();
    
        this.state = {
          activeSwitch: 1
        };
    }
  render() {
    return (
        
      <Container style={styles.wrapper}>
         <View style={{flex:2}}>
             <Item style={{flex:1, flexDirection: 'row',}}>
                <Text style={{textAlign:'left', fontSize: 11, flex:6}}>Mise a jour2016-09-05 UTC</Text>
            </Item> 
        </View>
        <View style={{marginBottom:'2%', justifyContent:'center', alignItems: 'center',}}>
        <Item style={{borderColor:'#ffffff'}}>
        <Text style={{paddingRight:'2%', fontWeight: 'bold',}}>Cash</Text>
        <ToggleSwitch
            isOn={false}
            onColor='#009edf'
            offColor='#009edf'
            size='medium'
            onToggle={ (isOn) => console.log('changed to : ', isOn) }
            />
            <Text style={{paddingLeft:'2%', color:'#89898a'}}>Verement</Text>
        </Item>    
        </View>
        <View style={{flex:6}}>
         <Item style={styles.wrap}>
            <Thumbnail square size={20} source={require('../images/co.png')} 
            style={styles.img} />
            <Text style={styles.text}>EUR</Text> 
            <Input placeholder='SaiSir Un montant' style={styles.textInput}/>
            <Text style={styles.textrigh}>EUR</Text>
          </Item>
          <Item style={styles.wrap}>
          <Thumbnail square size={40} source={require('../images/co2.png')} 
            style={styles.img} />
            <Text style={styles.text}>MUR</Text> 
            <Input placeholder=''  style={styles.textInput}/>
            <Text style={styles.textrigh}>MUR</Text>
          </Item>
          <View style={{justifyContent:'center', alignItems: 'center',}}>
           <Text style={{marginTop:'5%',textAlign:'center',color: '#5fa0c9',}}>Taux de change</Text>
           </View>
            <View>
        <Text style={{fontWeight: 'bold',fontSize:35,textAlign:'center'}}>
                1,00 
                <Text style={{fontSize:12,}}>
                EUR
            </Text>
            <Text style={{fontSize:24,paddingLeft:'6',paddingRight:'6'}}>
            =
            </Text>
            <Text style={{fontWeight: 'bold',fontSize:35}}>
                37,77
            </Text>
            <Text style={{fontSize:12,}}>
                 MUR
            </Text>
        </Text>
        <Text style={{fontWeight: 'bold',fontSize:30,textAlign:'center', color:'#89898a'}}>
                1,00 
                <Text style={{fontSize:12,color:'#89898a'}}>
                MUR
            </Text>
            <Text style={{fontSize:24,marginLeft: '5%',color:'#89898a'}}>
                    =
            </Text>
            <Text style={{fontWeight: 'bold',fontSize:30,color:'#89898a'}}>
                0.0261
            </Text>
            <Text style={{fontSize:12,}}>
                 EUR
            </Text>
        </Text>
      
            </View>
        </View>
        <View style={[styles.footer]}>
                <View style={[styles.bgButton3]}>
                   <Item>
                    <Image source={require('../images/icon-bottom.png')} /> 
                    <Text style={{textAlign:'center',color:'#6fa8cd', paddingLeft:'2%'}}>Suivere Lorem Hello Word ></Text>
                   </Item>    
                </View>    
                <View  style={[styles.bgButton2]}>
                    <Text style={styles.textButton2}>SIMULER UN TAX</Text>
                </View>

                <View style={[styles.bgButton]}>
                    <Text style={styles.textButton}>COMMANDER</Text>
                </View>
           
        </View>    
         
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    footer: {flex:4, flexDirection: 'column',},
    bgButton: {
        backgroundColor:'#009edf', 
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:1,
        borderColor: '#cccccc',
        marginTop:'3%',
    },
    bgButton2: {
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor:'#ffffff',
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
    },
    bgButton3: {
        flex:4,
        justifyContent:'center',
        alignItems: 'center',
    },
    textButton: {color:'#ffffff',textAlign:'center'},
    textButton2: {color:'#333333',textAlign:'center'},
    text: {
        fontSize: 8,
        marginLeft: '3%',
        paddingTop:2,
    },
    textrigh: {
        marginRight: '3%',
        fontSize: 11,
        textAlign:'right'
    },
  
    textInput: {
        textAlign: 'center',
        color:'#cccccc'
    },
    img: {
        width:'10%',
        height:'10%',
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
        paddingRight:'5%',
        paddingBottom:'5%',
    },
    img: {
        width: 50,
        height: 50
    } 
})