import React , {Component} from "react"
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'
import {width,height} from '../../api/screen'

class SetPsdView extends Component{
    constructor(){
        super();
        this.state={
            name:''
        }
    }
    render(){
        let  {navigate} =this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content'/>
                <View style={styles.backIcon}>
                    <TouchableOpacity  onPress={()=>navigate('Register')}>
                        <Image style={styles.img} source={require('../../images/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>请设置密码</Text>
                <Text style={styles.label}>验证码已发送至</Text>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.line}>
                            <View style={styles.telCon}>
                                <TextInput  style={styles.textInput}
                                            underlineColorAndroid='transparent'
                                            selectionColor={'black'}
                                            placeholder={'请输入密码'}
                                            placeholderTextColor={'gray'}
                                            secureTextEntry={true}
                                />
                            </View>

                        </View>

                        <View style={styles.line}>
                            <TouchableOpacity style={styles.btnCan}   >
                                <Button
                                    title='完成并登陆'
                                    onPress={()=>navigate('Login')}
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
        marginTop:40,
        fontSize:18,
        color:'black'
    },
    content:{
        marginTop:40,
    },
    form:{
        height:200,
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
        width:320,
        textAlign:'center',
        fontSize:18
    },
    btnCan:{
        width:320,
        borderRadius:10
    },
})
export default SetPsdView;