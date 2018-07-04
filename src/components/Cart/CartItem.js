import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import {observer,inject} from 'mobx-react'
import {width} from '../../api/screen'
import {action,computed} from 'mobx'

@observer
@inject('rootStore')
export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            cartId:this.props.id,
            updateFlag:'update'
        }
    }
    @action
    del(){
        this.props.rootStore.cartGoods.reduceMount(this.state.cartId);
        this.setState({
            updateFlag:'up'
        });
        this.props.updateTotal();

    }
    @action
    add(){
        this.props.rootStore.cartGoods.addMount(this.state.cartId);
        console.log(this.props.rootStore.cartGoods.getData()[this.state.cartId].goodMount);
        this.props.updateTotal();
        this.setState({
            updateFlag:'up'
        });
    }
    @computed get mount(){
        return this.props.rootStore.cartGoods.getData()[this.state.cartId].goodMount;
    }

    removeItem(){
        let item = this.props.data;
        this.props.rootStore.goodList.doNotInCart(item.idInGood);
        this.props.rootStore.cartGoods.delItem(item);
        this.props.updateTotal();
    }
    render() {
        let {image, price, name} = this.props.data;
        return <View style={styles.item}>
            <View style={styles.imgWrapper}>
                <Image style={styles.img} source={image}/>
            </View>
            <View style={styles.txt}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity style={styles.delete}>
                    <Text style={{color:'#e5779c',  fontSize:16,}} onPress={this.removeItem.bind(this)}>移除</Text>
                </TouchableOpacity>
                <Text style={styles.price}>{price}RMB</Text>
                <View style={styles.mount}>
                    <Text style={styles.op} onPress={this.del.bind(this)} >-</Text>
                    <Text style={styles.num}>{this.mount}</Text>
                    <Text style={styles.op}  onPress={this.add.bind(this)}>+</Text>
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    item: {
        width: width - 40,
        marginLeft: 20,
        height: 120,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        marginTop: 25,
        flexDirection: 'row'
    },
    imgWrapper: {
        width: 82,
        height: 82,
        borderWidth: 0.5,
        borderColor: '#297bb8'
    },
    img: {
        width: 80,
        height: 80,
    },
    delete:{
        marginLeft:140,
        marginTop:-20,
        borderWidth:1,
        width:40,
        height:22,
        paddingLeft:4,
        borderColor:'#e5779c',
        borderRadius:10
    },
    txt: {
        width: width - 160,
        marginLeft: 20
    },
    name: {
        color: '#000'
    },
    price: {
        color: '#319bf4',
        marginTop: 40
    },
    mount: {
        width: 100,
        height: 30,
        marginLeft: 80,
        marginTop: -25,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    op:{
        width:25,
        height:25,
        borderWidth:1,
        color:'#319bf4',
        borderColor:'#297bb8',
        fontSize:30,
        lineHeight:22,
        paddingLeft:5,
    },
    num:{
        color:'#319bf4',
        fontSize:18
    }

})
