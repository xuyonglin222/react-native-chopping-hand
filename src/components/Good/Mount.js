import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Mount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: 0
        }
    }


    delMount() {
        let m = this.state.mount;
        if (m > 0) {
            this.setState({mount: m - 1},()=>{
                this.props.getMount(this.state.mount)
            })
        }
    }

    addMount() {
        let m = this.state.mount;
        this.setState({mount: m + 1},()=>{
            this.props.getMount(this.state.mount)
        })

    }

    render() {
        return <View style={styles.mount}>
            <Text style={{
                width: 20, textAlign: 'center',borderRightWidth:1,borderColor:'#e5779c',
            }} onPress={this.delMount.bind(this)}>-</Text>
            <Text style={styles.val}>{this.state.mount}</Text>
            <Text style={{
                width: 20, textAlign: 'center',borderLeftWidth:1,borderColor:'#e5779c',
            }} onPress={this.addMount.bind(this)}>+</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    mount: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 30,
        borderWidth: 1,
        borderRadius:10,
        borderColor:'#e5779c',
        height: 25,
        width: 78
    },
    val: {
        width: 15,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },

})