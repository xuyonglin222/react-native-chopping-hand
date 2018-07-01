import React, {Component} from 'react'
import {View, Text, StatusBar, Image,ScrollView, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {width, height} from '../../api/screen'
import {fruitlist} from "../../api/goodList";
import CartItem from './CartItem'
const isComplete = false;

class CartView extends Component {
    constructor() {
        super();
        this.state = {
            isComplete: false,
            cartList: fruitlist,
            total:[]
        }
    }

    static navigationOptions = {
        title: '购物车',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black',},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerLeft: <Image style={{width: 0, height: 0, marginRight: 15}} source={require('../../images/search.png')}/>,
        headerBackStyle: null,
        headerRight: <Text style={{marginRight: 10}}
                           onPress={() => isComplete = !isComplete}>{isComplete ? '完成' : '编辑'}</Text>
    };

    getTotal(msg){
        let t= this.state.total;
        t+=msg.price*msg.mount;
        this.setState({
        total:t
        })
    }

    render() {
        return (
            <View>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <ScrollView style={styles.cartWrapper}>
                    {
                        fruitlist.map((item,index)=>{
                            return <CartItem data={item} getPriceItem={this.getTotal.bind(this)} key={index} navigation={this.props.navigation} />
                        })
                    }
                </ScrollView>
                <View style={styles.buy}>
                    <View style={styles.price}>
                        <Text style={styles.label}>Total</Text>
                        <Text style={styles.money}>300RMB</Text>
                    </View>
                    <TouchableOpacity style={styles.btnWrapper}>
                        <Text style={styles.btnBuy}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    cartWrapper:{
        width:width,
        backgroundColor:'#e5e8fb'
    },
    buy:{
        width:width,
        position:'absolute',
        bottom:0,
        height:120,
        backgroundColor:'#fff'
    },
    price:{
        width:width-40,
        marginLeft:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    label:{
        color:'#000',
        fontSize:20
    },
    money:{
        color:'#0086ff',
        fontSize:20
    },
    btnWrapper:{
        width:180,
        height:45,
        backgroundColor:'#0086ff',
        paddingTop:10,
        paddingLeft:50,
        marginLeft:90,
        marginTop:15,
        borderRadius:20,
    },
    btnBuy:{
        color:'#fff',
        fontSize:20,

    }
})
export default CartView;