import React, {Component} from 'react'
import {View, Text, StatusBar, Image, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import {width, height} from '../../api/screen'


class HomeView extends Component {
    static navigationOptions = {
        title: '首页',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black'},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerLeft: <Image style={{width: 0, height: 0, marginRight: 15}} source={require('../../images/search.png')}/>,
        headerBackStyle: null,
        headerRight: <Image style={{width: 25, height: 25, marginRight: 15}}
                            source={require('../../images/search.png')}/>
    };

    constructor(props) {
        super(props);
        this.state = {
            swipeShow: false,
            fruitArr : [
                '../../images/a1.png',
                '../../images/a2.png',
                '../../images/a3.png',
                '../../images/a4.png',
                '../../images/a5.png',
                '../../images/a6.png',
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swipeShow: true
            })
        })
    }

    renderSwiper() {
        return (
            <Swiper style={styles.swiper} showsButtons>
                <View style={styles.slideShow}>
                    <Image style={styles.banner} source={require('../../images/slide1.jpg')}/>
                </View>
                <View style={styles.slideShow}>
                    <Image style={styles.banner} source={require('../../images/slide2.jpg')}/>
                </View>
                <View style={styles.slideShow}>
                    <Image style={styles.banner} source={require('../../images/slide3.jpg')}/>
                </View>
            </Swiper>
        )
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'white'}/>
                <View style={{width: width, height: 150,}}>
                    {this.state.swipeShow && this.renderSwiper()}
                </View>
                    {this.state.fruitArr.map((img,index)=> {
                            console.log(img, index);
                            return (<View key={index}  style={{width:40,height:40}}>
                                <Image  source={{uri:img}} style={{width: 40, height: 40,}}/>
                            </View>)
                        }
                    )}
                <Text onPress={() => navigate('Login')}>{width}{height}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        backgroundColor: 'white'
    },
    swiper: {
    },
    slideShow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:150
    },
    banner: {
        width: 360,
        height:150
    }
})
export default HomeView;