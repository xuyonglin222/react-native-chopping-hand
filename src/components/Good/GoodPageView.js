import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import {width, height} from '../../api/screen'
import Mount from './Mount'

export default class GoodPageView extends Component {
    static navigationOptions = {
        title: '商品详情',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black'},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerRight: <Image style={{width: 40, height: 40}}/>
    };

    constructor(props) {
        super(props);
        this.state = {
            Msg: null,
            postArr: ['中通', '顺丰', '韵达'],
            pic: require('../../images/like.png'),

        }
    }

    componentWillMount() {
        console.log(this.props.navigation.state.params.obj)
        this.setState({
            Msg: this.props.navigation.state.params.obj,

        })
    }

    conPrice(mount) {
        //拿到mount
        console.log(mount)
    }

    likeChange() {
        this.setState({
            pic: require('../../images/likeSelect.png')
        })
    }

    render() {
        let postArr = this.state.postArr;
        return <View>
            <StatusBar
                translucent={true} barStyle={'dark-content'} backgroundColor={'white'}
            />
            <View style={styles.container}>
                <View style={styles.border1}>
                </View>
                <View style={styles.border2}>
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{this.state.Msg.name}</Text>
                    <View style={styles.option}>

                        <Text style={styles.brief}>
                            此{this.state.Msg.name}天上地下仅此一家，只应天上有，人间难得机会吃，
                        </Text>
                        <View style={styles.line}>
                            <Text style={styles.label}>数量</Text>
                            <Mount getMount={this.conPrice.bind(this)}/>
                            <View style={styles.price}>
                                <Text style={styles.fontStyle1}>price</Text>
                                <Text style={styles.fontStyle2}>{this.state.Msg.price}</Text>
                                <Text style={styles.fontStyle3}>RMB</Text>
                            </View>
                        </View>
                        <View style={styles.post}>
                            <Text style={styles.label}>快递</Text>
                            <View style={styles.btnGroup}>
                                {
                                    postArr.map((item, index) => {
                                        return <TouchableOpacity>
                                            <Text key={index} style={styles.btn}>{item}</Text>
                                        </TouchableOpacity>
                                    })
                                }
                            </View>
                        </View>

                    </View>
                    <View style={styles.pic}>
                        <Image source={this.state.Msg.image}/>
                    </View>
                    <TouchableOpacity style={styles.like} onPress={this.likeChange.bind(this)}>
                        <Image ref='like' style={styles.likeIcon} source={this.state.pic}/>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.addToCart}>
                    <Text style={{
                        lineHeight: 27, fontSize: 18, textAlign: 'center', color: 'white'
                    }}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buy}>
                    <Text style={{
                        lineHeight: 27, fontSize: 18, textAlign: 'center', color: 'white'
                    }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        position: 'relative',
    },
    border1: {
        width: width - 80,
        height: 50,
        position: 'absolute',
        top: 20,
        left: 40,
        backgroundColor: '#ffd7d8',
        borderRadius: 5
    },
    border2: {
        width: width - 60,
        height: 50,
        position: 'absolute',
        top: 25,
        left: 30,
        backgroundColor: '#f6858b',
        borderRadius: 5
    },
    content: {
        width: width - 40,
        height: 450,
        position: 'absolute',
        top: 30,
        left: 20,
        backgroundColor: '#f83e53',
        borderRadius: 5,
    },
    name: {
        height: 40,
        color: 'white',
        lineHeight: 40,
        marginLeft: 20,
    },
    pic: {
        width: width - 80,
        backgroundColor: '#f4f4f4',
        position: 'absolute',
        top: 50,
        borderRadius: 10,
        height: 190,
        overflow: 'visible'
    },
    like: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 120,
        right: 20,
        borderRadius: 20,

    },
    likeIcon: {
        width: 15,
        height: 15,
        marginLeft: 12.5,
        marginTop: 12.5,
    },
    option: {
        width: width - 40,
        position: 'absolute',
        top: 140,
        height: 310,
        paddingTop: 120,
        backgroundColor: 'white'
    },
    brief: {
        width: width - 100,
        marginLeft: 20,
        fontSize: 12
    },
    line: {
        width: width - 40,
        height: 40,
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    label: {
        height: 30,
    },
    price: {
        width: 120,
        flexDirection: 'row',
        backgroundColor: '#297bb8',
        height: 40,
        marginTop: -10,
        paddingLeft: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    fontStyle1: {
        color: 'white',
        lineHeight: 30,
        marginRight: 5,
        marginLeft: 5,
        fontSize: 15
    },
    fontStyle2: {
        color: 'white',
        lineHeight: 30,
        marginLeft: 5,
        marginRight: 2,
        fontSize: 18
    },
    fontStyle3: {
        color: 'white',
        lineHeight: 30,
        fontSize: 10,
        marginRight: 5,
    },
    post: {
        width: width - 80,
        height: 40,
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'row',
    },
    btnGroup: {
        width: 100,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: -10
    },
    btn: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#e5779c',
        lineHeight: 30,
        textAlign: 'center',
        borderRadius: 30,
        color: '#e5779c',
        marginRight: 10
    },
    addToCart: {
        position: 'absolute',
        backgroundColor: '#297bb8',
        width: 150,
        height: 35,
        borderRadius: 15,
        bottom: 95,
        left: 25
    },
    Buy: {
        position: 'absolute',
        backgroundColor: '#f83e53',
        width: 150,
        height: 35,
        borderRadius: 15,
        bottom: 95,
        right:25
    }
})