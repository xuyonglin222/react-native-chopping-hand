import React ,{Component} from 'react'
import {View,Text,StatusBar,Image,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import {width} from '../../api/screen'

import Avatar from './Avatar'

import ListItem from './ListItem'
import {observer,inject} from 'mobx-react'

@observer
@inject('rootStore')
class MineView extends Component{
    static navigationOptions = {
       title: '我',
       headerTitleStyle: {flex:1,textAlign:'center',fontSize: 15, color: 'black',},
        headerStyle: {height: 38, backgroundColor: 'white',marginTop:21},
       headerBackStyle:null,
        headerLeft:null
    };

    constructor(props){
        super(props);
        this.state={
            name:'',
            List:[
                {
                    name:'我的订单',
                    route:'Order'
                },
                {
                    name:'我的收藏',
                    route:'Like'
                },
                {
                    name:'收货地址',
                    route:''
                },
                {
                    name:'浏览历史',
                    route:''
                }
                ]
        }
    }
    componentWillMount(){
        console.log(this.props.rootStore.user)
        this.setState({
            name:this.props.rootStore.user.getName(),
            image:this.props.rootStore.user.getAvatar(),
        })
    }
    logOut(){
        this.props.rootStore.user.setName('');
        this.props.rootStore.user.setAvatar(null);
        this.props.navigation.navigate('Login');
    }
    render(){


        let {name,image}=this.state;

        return (
            <View>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <View style={styles.wrapper}>
                    <Image source={require('../../images/mybg.jpg')} style={styles.img} />
                    <View style={styles.blk}>
                        <Avatar source={image} />
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.list}>
                        {
                            this.state.List.map((item,index)=>{
                                return <ListItem navigation={this.props.navigation} data={item} key={index} />
                            })
                        }
                    </View>
                    <TouchableOpacity style={styles.btnWrapper} onPress={this.logOut.bind(this)}>
                        <Text style={styles.btnOut}>Login Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        width: width,
        height: 600,
        position: 'relative',
        opacity: 0.8
    },
    img: {
        width: width,
        height: 160,
        position: 'absolute'
    },
    blk: {
        width: width,
        height: 160,
        backgroundColor: '#000',
        opacity: 0.7,
        // position:'absolute',
        flexDirection: 'column',
        alignItems: 'center'
    },
    name: {
        color: 'white',
        fontSize: 18,
        marginTop: 10
    },
    list: {
        width: width,
        marginTop: 20,
    },
    btnWrapper: {
        width: 150,
        height: 45,
        backgroundColor: '#0086ff',
        paddingTop: 8,
        paddingLeft: 30,
        marginLeft: 100,
        marginTop: 40,
        borderRadius: 20,
    },
    btnOut: {
        color: '#fff',
        fontSize: 20,
    }
})
export default MineView;