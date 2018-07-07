import React , {Component} from "react"
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    Alert
} from 'react-native'
import {width,height} from '../../api/screen'
import axios from 'axios'
class RegisterView extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            psd:'',
        }
    }

    doRegister(){
        let  {navigate} =this.props.navigation
        let name= this.state.name;
        let psd= this.state.psd;
        axios({
            method:'post',
            url:'/register',
            data:{
                name,
                psd,
            }
        }).then((res)=>{
            if(res.data.status===200){
                Alert.alert('提示','注册成功', [
                    {text: 'OK', onPress: () => navigate('Login',{name:this.state.name})},
                ])
            }else{
                Alert.alert('注册失败，请更换用户名');
                this.setState({
                    name:'',
                    psd:''
                })
            }
            },
            (err)=>{
            console.log(err)
            })

    }
    render(){

        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content'/>
                <View style={styles.backIcon}>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')}>
                        <Image style={styles.img} source={require('../../images/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>新用户注册</Text>
                <View style={styles.content}
                            ref={'scrollView'}
                >
                    <View style={styles.form}
                    >
                        <View style={styles.line}>
                            <Text style={styles.label}>用户名</Text>
                            <View style={styles.telCon}>
                                <TextInput  style={styles.textInput}
                                            underlineColorAndroid='transparent'
                                            selectionColor={'black'}
                                            placeholder={'请输入用户名'}
                                            placeholderTextColor={'gray'}
                                            autoFocus
                                            value={this.state.name}
                                            onChangeText={(value)=>this.setState({name:value})}
                                />
                            </View>
                        </View>
                        <View style={styles.line}>
                            <Text style={styles.label}>密码</Text>
                            <View style={styles.telCon}>
                                <TextInput  style={styles.textInput}
                                            underlineColorAndroid='transparent'
                                            selectionColor={'black'}
                                            placeholder={'请输入密码'}
                                            placeholderTextColor={'gray'}
                                            secureTextEntry={true}
                                            value={this.state.psd}
                                            onChangeText={(value)=>this.setState({psd:value})}
                                />
                            </View>
                        </View>
                        <View style={styles.line}>
                            <TouchableOpacity style={styles.btnCan}
                            >
                                <Button
                                    title='注册'
                                    onPress={this.doRegister.bind(this)}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:width,
        height:height,
        backgroundColor:'white',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20
    },
    backIcon:{
        marginTop:20,
    },
    img:{
        width:30,
        height:30
    },
    title:{
        marginTop:20,
        fontSize:18,
        color:'black'
    },
    content:{
        marginTop:20,
    },
    form:{
        height:800,
        overflow:'scroll',
    },
    line:{
        width:width,
        marginTop:10,
        justifyContent:'center',

    },
    telCon:{
        width:320,
        borderBottomWidth:1,
        borderBottomColor:'gray',
    },
    label:{
        color:'black',
        fontSize:12
    },
    tel:{
        width:35,
        marginTop:10,
        marginLeft:10,
        color:'black',
        borderRightColor:'gray'
    },
    textInput:{
        color:'black',
        width:280,

    },
    btnCan:{
        width:320,
        borderRadius:10
    },
})
export default RegisterView;