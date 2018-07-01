import React , { Component } from 'react'

import {View,StyleSheet,TextInput,Button,TouchableOpacity,Image,Text} from 'react-native'
import {width,height} from '../../api/screen'


class LoginForm extends  Component{
    constructor(){
        super();
        this.state={
            name:'',
            psd:'',
            isBtnActive:true
        };
    }
    btnActive(){
        if(this.state.name.length!==0){
            this.setState({isBtnActive:false});
        }
    }
    btnBlur(){
        this.setState({isBtnActive:true});
    }
    doLogin(){
        console.log('login')
    }

    render(){
        let {navigate} = this.props.navigation;
        return (
            <View style={styles.absolute}>
                <View style={styles.header}>
                    <Image
                      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                      onPress={() => console.log("Works!")}
                    />
                    <Text style={styles.register} onPress={()=>navigate('Register')}>新用户去注册</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.line}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput  style={styles.textInput} underlineColorAndroid='transparent'
                                   selectionColor={'white'}
                                   placeholder={'请输入用户名'}
                                   placeholderTextColor={'gray'}
                                   autoFocus
                                    value={this.state.name}
                                    onChangeText={(msg)=>{
                                        this.setState({name:msg});
                                    }}
                        />
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.label}>PassWord</Text>
                        <TextInput style={styles.textInput} underlineColorAndroid='transparent'
                                   selectionColor={'white'}
                                   placeholder={'请输入密码'}
                                   secureTextEntry={true}
                                   placeholderTextColor={'gray'}
                                   onFocus={this.btnActive.bind(this)}
                                   onBlur={this.btnBlur.bind(this)}
                                   onChangeText={(msg)=>{
                                       this.setState({psd:msg});
                                   }}
                        />
                    </View>
                    <View style={styles.line}>
                        <TouchableOpacity style={styles.btnCan}>
                            <Button
                                ref={'btnLogin'}
                                title='登录'
                                // disabled={this.state.isBtnActive}
                                onPress ={()=>navigate('Home')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.forgetPsd} onPress={()=>navigate('ForgetPsd')}>忘记密码</Text>
                    </View>
                </View>

            </View>)
    }
}
const styles = StyleSheet.create({
    absolute:{
      position:'absolute',
      left:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        width:width,
        height:100,
        paddingLeft:20,
        marginTop:20,
        justifyContent:'center',
    },
    register:{
        position:'absolute',
        right:20,
        width:78,
        fontSize:12,
        color:'white'
    },
    form:{
        height:200,
    },
    line:{
        width:width,
        marginTop:10,
        justifyContent:'center',

    },
    label:{
        marginLeft:20,
        color:'white'
    },
    textInput:{
        marginLeft:20,
        color:'white',
    },
    btnCan:{
        width:330,
        marginLeft:20,
        borderRadius:10
    },
    forgetPsd:{
        fontSize:12,
        color:'white',
        marginLeft:20
}
})

export default LoginForm;