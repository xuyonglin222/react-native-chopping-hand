import React , {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import {width} from '../../api/screen'
export default class GoodItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {navigation,obj} =this.props;
        return <TouchableOpacity onPress={()=>navigation.navigate('GoodPage',{obj})}>
            <View style={styles.Item}>
                <Image source={obj.image} style={styles.img} />
                <Text style={styles.name}  >{obj.name}</Text>
                <Text style={styles.price}>{obj.price}RMB</Text>
            </View>
            </TouchableOpacity>
    }
}

const styles=StyleSheet.create({
    Item:{
        width:width/2-30,
        marginTop:12,
        justifyContent:'center',
        position:'relative',
        backgroundColor:'#f4f4f4'
    },
    img:{
        width:width/2-40,
        height:width/2-40,
        marginLeft:5
    },
    name:{
        color:'black',
        fontSize:18,
        textAlign:'center'
},
    price:{
        color:'#e53f97',
        fontSize:15,
        fontWeight:"900",
        textAlign:'center'
    },
    like:{
        width:20,
        height:20,
        position:'absolute',
        top:5,
        right:5
    }
})