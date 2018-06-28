import React ,{Component} from 'react'

import {
    View,
    Text,
    Image,
StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class LikeItem extends Component{
    constructor(props){
        super(props);
        this.state={
            inCart:null
        }
    }
    componentWillMount(){
        this.setState({
            inCart:this.props.data.inCart
    })
    }
    addToCart(){
        this.setState({
            inCart:true
        })
    }
    renderIcon(){
        if(this.state.inCart){
            return <Text style={styles.label}>In your Cart</Text>
        }
        return  <TouchableOpacity onPress={this.addToCart.bind(this)} style={styles.cartIcon}>
            <Image style={{width:22,height:22,marginLeft:7,marginTop:7}} source={require('../../images/cart.png')} />
        </TouchableOpacity>
    }
    render(){
        let obj =this.props.data;
        let {name,image} =this.props.data;
        return <TouchableOpacity style={styles.item}  onPress={()=>this.props.navigation.navigate('GoodPage',{obj})} >
            <Text style={styles.name}>{name}</Text>
            <Image source={image}  style={styles.img}/>
            {this.renderIcon()}
        </TouchableOpacity>
    }
}

const styles =StyleSheet.create({
    item:{
        height:120,
        flex:1,
        backgroundColor:'#f7f5f6',
        flexDirection:'row',
        marginTop:15
    },
    name:{
        width:50,
        marginLeft:20,
        marginTop:30,
        color:'black',
        fontFamily:'NSimSun',
        fontSize:14
    },
    img:{
        width:120,
        height:120,
        marginLeft:40
    },
    cartIcon:{
        width:35,
        height:35,
        borderRadius:30,
        backgroundColor:'#e5779c',
        marginLeft:70,
        marginTop:70
    },
    label:{
        marginTop:80,
        marginLeft:30,
        color:'#e5779c'
    }
})