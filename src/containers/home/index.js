import React from "react";
import { Image } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Thumbnail } from "native-base";

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import { HeaderComp } from '../../components/common';

export default class HomeScreen extends React.Component {

  state = {
    isModalVisible: false
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  render() {
    return (
      <Container>

        <HeaderComp
          headerText="Home"
          isLogo={true}
          nav={this.props.navigation}
        />

        <Content padder>
          <View>
            <View style={styles.selectBoxContainer}>
              <Text>Modal</Text>
              <Button full
                style={{
                  height: 30,
                  padding: 5,
                  flexDirection: 'row'
                }}
                onPress={this._toggleModal}>
                <Left style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Image
                    source
                    source={require("../../assets/images/us.jpg")}
                    style={{ width: 25, height: 15, marginRight: 5 }}
                  />
                  <Text>Modal USSSSSS</Text>
                </Left>
                <Right>
                  <Icon name="menu" />
                </Right>
              </Button>
            </View>

            <View style={styles.selectBoxContainer} >
              <Text>Modal</Text>
              <Button full
                style={{ marginTop: 10 }}
                onPress={this._toggleModal}>
                <Left>
                  <Text>Modal</Text>
                </Left>
                <Right>
                  <Text>Modal</Text>
                </Right>
              </Button>
            </View>

            <Button full
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}>
              <Text>Chat With People</Text>
            </Button>
          </View>
          <View>

            <Button full
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}>
              <Text>Chat With People</Text>
            </Button>

            <Button full
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}>
              <Text>Chat With People</Text>
            </Button>

            <Button full
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}>
              <Text>Chat With People</Text>
            </Button>
          </View>
        </Content>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, backgroundColor: 'red' }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </Container>
    );
  }
}

const styles = {
  selectBoxContainer: {
    flex: 1,
    alignItems: 'center',
  }
}