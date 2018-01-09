// import libraries for making a component
import React from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

// make a component
const Header = ({ headerText }) => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        </Container>
    );
}

// make the component available to other parts of the app
export { Header };
