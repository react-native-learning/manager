// import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native';

// make a component
const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,

        // shadow for IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 200 },
        shadowOpacity: 0.2,
        // shadow for Android
        elevation: 2,

        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    },
};

// make the component available to other parts of the app
export { Header };
