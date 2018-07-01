import React ,{Component} from 'react'
import {View,Text,ScrollView,StatusBar,Image,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import {width,height} from '../../api/screen'
import {fruitlist} from "../../api/goodList";
import LikeItem from './LikeItem'
class LikeView extends Component{
    static navigationOptions = {
        title: '收藏',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black'},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerRight: <Image style={{width: 40, height: 40}}/>
    };
    constructor(props){
        super(props);
        this.state={
            likeArr:fruitlist
        }
    }
    componentWillMount(){

    }
    render(){
        let likes=this.state.likeArr;
        return (
            <View>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <ScrollView style={styles.likeWrapper}>
                    {
                        likes.map((item,index)=>{
                            return <LikeItem data={item} key={index} navigation={this.props.navigation} />
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    likeWrapper:{
        width:width
    }
})

export default LikeView;