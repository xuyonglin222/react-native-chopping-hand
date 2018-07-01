import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

import {width} from '../../api/screen'

export default  class OrderItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {post,name,total,tag,goodMount,image} = this.props.data;
        return <View style={styles.item}>
            <View style={styles.header}>
                <Text style={styles.post}>{post}快递</Text>
                <Text style={styles.tag}>{tag}</Text>
                <Image style={styles.icon} source={require('../../images/remove.png')}/>
            </View>
            <View style={styles.content}>
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={image} />
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.mount}>共{goodMount}件商品</Text>
                    <Text style={styles.total}>实付款：<Text style={{fontSize:20}}>{total}</Text>RMB</Text>
                </View>

            </View>
            <View style={styles.footer}>

            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    item:{
        marginTop:20,
        width:width,
        height:180,
        backgroundColor:'#fff'
    },
    header:{
        height:40,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        flexDirection:'row',
    },
    post:{
        fontSize:16,
        color:'#000',
        width:width-100
    },
    tag:{
        width:60,
    },
    icon:{
        width:16,
        height:16
    },
    imgWrapper:{
        width:width,
        height:100,
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:10,
        backgroundColor:'#f4f4f4',
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        width:90,
        height:90
    },
    name:{
        color:'#000',
        fontSize:16,
        marginLeft:10,
        marginRight:15
    },
    txt:{
        height:40,
        width:width,
        flexDirection:'row-reverse',
    },
    mount:{
        lineHeight:30,
        color:'#000',
        marginRight:10
    },
    total:{
        lineHeight:30,
        color:'#000',
        marginRight:10
    }
})