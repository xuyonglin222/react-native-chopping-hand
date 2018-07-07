import React , { Component } from 'react'

import {View,StyleSheet,TextInput,Alert,Button,TouchableOpacity,Image,Text} from 'react-native'
import {width,height} from '../../api/screen'
import axios from 'axios'
import {observer,inject} from 'mobx-react'

@observer
@inject('rootStore')
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
    componentWillMount(){
        if(this.props.navigation.params){
            let name = this.props.navigation.params.name;
            this.setState({
                name,
            })
        }
    }
    btnBlur(){
        this.setState({isBtnActive:true});
    }
    doLogin(){
        let name=this.state.name;
        let psd=this.state.psd;
        axios({
            method:'post',
            url:'/login',
            data:{
                name,
                psd
            }
        }).then((res)=>{
            console.log(res.data);
            let {status,username}=res.data;
            console.log(status);
            if(status==='200'){
                this.props.rootStore.user.setName(username);
                this.props.rootStore.user.setAvatar(require('../../images/avatar.jpg'));
                console.log(this.props.rootStore.user.getName())
                this.props.navigation.navigate('Home');
            }else{
                Alert.alert('登录失败，请重新登录');
            }

        },(err)=>{
            console.log(err)
        })
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
                                onPress ={this.doLogin.bind(this)}
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