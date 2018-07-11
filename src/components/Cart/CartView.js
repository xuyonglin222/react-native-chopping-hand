import React, {Component} from 'react'
import {View, Text, StatusBar, Image,ScrollView, Alert, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {width, height} from '../../api/screen'
import CartItem from './CartItem'
import {observer,inject} from 'mobx-react'

@observer
@inject('rootStore')
class CartView extends Component {
    static navigationOptions = {
        title: '购物车',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black',},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerLeft: <Image style={{width: 0, height: 0, marginRight: 15}} source={require('../../images/search.png')}/>,
        headerBackStyle: null,
        headerRight: <Text style={{marginRight: 10}} >编辑</Text>
    };
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            cartList: this.props.rootStore.cartGoods.getData(),
            total:this.props.rootStore.cartGoods.getTotal()
        }
    }
    updateState(){
        this.setState({
            isComplete:true
        })
        this.updateData();
    }
    componentWillReceiveProps(){
        this.setState({
            cartList: this.props.rootStore.cartGoods.getData(),
            total:this.props.rootStore.cartGoods.getTotal()
        })
    }

    updateData(){
        this.setState({
            total:this.props.rootStore.cartGoods.getTotal()
        })
    }
    _doBuy(){
        let cart = Array.from(this.props.rootStore.cartGoods.getData());
        cart.map((item,index)=>{
            let {idInGood,total,price,goodMount} = item;
            total=price*goodMount;
            item.total=total;
            this.props.rootStore.goodList.doNotInCart(idInGood);
            this.props.rootStore.order.addOrder(item);
        })
        this.props.rootStore.cartGoods.removeAll();
        this.updateData();
        Alert.alert('提示','购买成功，请到订单管理查看详情', [
            {text: 'OK'},
        ])
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <ScrollView style={styles.cartWrapper}>
                    {
                        this.state.cartList.map((item,index)=>{
                            return <CartItem data={item}  id={item.id} updateTotal={this.updateData.bind(this)}
                                           key={index} navigation={this.props.navigation} />
                        })
                    }
                </ScrollView>
                <View style={styles.buy}>
                    <View style={styles.price}>
                        <Text style={styles.label}>Total</Text>
                        <Text style={styles.money}>{this.state.total}RMB</Text>
                    </View>
                    <Text style={{position:'absolute',left:100,
                        width:200,height:50,}}
                        onPress={this.updateState.bind(this)}
                    />
                    <TouchableOpacity style={styles.btnWrapper} onPress={this._doBuy.bind(this)}>
                        <Text style={styles.btnBuy}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    wrapper:{
        width:width,
        height:height,
        position:'relative',
    },
    cartWrapper:{
        width:width,
        height:height-240,
        position:'absolute',
        top:0,
    overflow:'scroll'
    },
    buy:{
        width:width,
        position:'absolute',
        bottom:120,
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