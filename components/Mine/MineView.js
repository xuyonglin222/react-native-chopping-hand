import React ,{Component} from 'react'
import {View,Text,StatusBar,Image,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native'

class MineView extends Component{
    static navigationOptions = {
        title: '我',
        headerTitleStyle: {flex:1,textAlign:'center',fontSize: 15, color: 'black',},
        headerStyle: {height: 38, backgroundColor: 'white',marginTop:21},
        headerBackStyle:null,
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

export default MineView;