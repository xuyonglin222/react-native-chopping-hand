import React,{Component} from 'react'

import {
    View,
    Image,
    StyleSheet
} from 'react-native'

import {width} from '../../api/screen'

export default  class Avatar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <View style={styles.wrapper}>
            <Image style={styles.avatar} source={this.props.source} />
        </View>
    }
}

const styles = StyleSheet.create({
    wrapper:{
        // marginLeft:width/2-30,
        marginTop:40,
        width:60,
        height:60,
        borderRadius:30,
        overflow:'hidden'
    },
    avatar:{
        width:60,
        height:60,
    }
})