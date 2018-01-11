// import libraries for making a component
import React from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';

const renderTitle = (headerText) => {
    if (headerText) {
        return (<Title>{headerText}</Title>);
    }
}

const renderLeftBtn = (isLogo, nav) => {
    if (isLogo) {
        return (
            <Thumbnail
                style={{ height: 25, width: 25 }}
                source={require("../../assets/images/logo.png")}
            />
        );
    } else {
        return (
            <Button
                transparent
                onPress={() => nav.goBack()}>
                <Icon name="ios-arrow-back" />
            </Button>
        );
    }
}

// make a component
const HeaderComp = ({
    headerText,
    nav,
    isLogo
    }) => {

    console.log(nav);

    return (
        <Header style={{
            backgroundColor: "#fff",
            height: 40,
            marginBottom: 10,
            shadowColor: 'red',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }}>
            <Left>
                {renderLeftBtn(isLogo, nav)}
            </Left>
            <Body>
                {renderTitle(headerText)}
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => nav.navigate('login')}>
                    <Icon name="menu" />
                </Button>
            </Right>
        </Header>
    );
}

// make the component available to other parts of the app
export { HeaderComp };
