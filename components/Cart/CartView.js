import React ,{Component} from 'react'
import {View,Text,StatusBar,Image,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native'

const isComplete=false;

class  CartView extends Component{
    constructor(){
        super();
        this.state={
            isComplete:false
        }
    }
    static navigationOptions = {
        title: '购物车',
        headerTitleStyle: {flex:1,textAlign:'center',fontSize: 15, color: 'black',},
        headerStyle: {height: 38, backgroundColor: 'white',marginTop:21},
        headerLeft:<Image style={{width:0,height:0,marginRight:15}} source={require('../../images/search.png')}/>,
        headerBackStyle:null,
        headerRight:<Text style={{marginRight:10}} onPress={()=>isComplete=!isComplete}>{isComplete?'完成':'编辑'}</Text>
    };
    render(){
        let {navigate}=this.props.navigation;
        return (
            <View>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <Text>Home</Text>
            </View>
        )
    }
}

export default CartView;