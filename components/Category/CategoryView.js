import React ,{Component} from 'react'
import {View,Text,StatusBar,Image,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native'

class CategoryView extends Component{
    static navigationOptions = {
        title: '分类',
        headerTitleStyle: {flex:1,textAlign:'center',fontSize: 15, color: 'black',},
        headerStyle: {height: 38, backgroundColor: 'white',marginTop:21},
        headerLeft:<Image style={{width:0,height:0}} />,
        headerBackStyle:null,
        headerRight:<Image style={{width:25,height:25,marginRight:15}} source={require('../../images/search.png')}/>
    };
    render(){
        let {navigate}=this.props.navigation;
        return (
            <View>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <Text onPress={()=>navigate('Login')}>CategoryView</Text>
            </View>
        )
    }
}

export default CategoryView;