import React, { Component } from 'react';
import {width,height} from '../../api/screen'
import {
    View,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import LoginForm from './LoginForm'

class LoginView extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'}/>
                <Image
                       source={require('../../images/1.jpg')}
                       style={styles.absolute}
               />
                <View style={styles.bgDark}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:height,
        overflow:'hidden',
        zIndex:9999
    },

    absolute: {
        width:width,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0

    },
    bgDark:{
        backgroundColor:'black',
        opacity:0.7,
        width:width,
        height:height
    }
});
export default  LoginView;