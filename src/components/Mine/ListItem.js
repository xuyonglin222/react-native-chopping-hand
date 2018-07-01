import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {width} from '../../api/screen'

export default  class ListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {name,route} = this.props.data;
        console.log(route)
        return <View style={styles.item}>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.op} onPress={()=>{
                console.log(route)
                this.props.navigation.navigate(route)
            }}>></Text>
        </View>
    }
}

const styles = StyleSheet.create({
    item:{
        width:width,
        backgroundColor:'#fff',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        flexDirection:'row',
        borderBottomWidth:0.3
    },
    label:{
        width:width-30,
        marginTop:5,
        color:'#000'
    },
    op:{
        fontSize:20,
    }
})