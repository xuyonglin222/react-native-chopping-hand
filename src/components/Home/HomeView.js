import React, {Component} from 'react'
import {View, Text, StatusBar, Image, Button, StyleSheet,
    ScrollView, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import {width, height} from '../../api/screen'
import {fruitlist} from "../../api/goodList";
import GoodItem from './goodItem'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'

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
        };
        this.txt = null
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
            <Swiper style={styles.swiper} autoplay={true} showsButtons>
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
                    <ScrollableTabView
                        style={styles.tabContainer}
                        tabBarBackgroundColor={'white'}
                        tabBarActiveTextColor={'#e5779c'}
                        tabBarUnderlineStyle={{backgroundColor: '#e5779c'}}
                        renderTabBar={() => <DefaultTabBar/>}>
                        <View style={styles.goodBox} tabLabel={'fruit'}>
                            {fruitlist.map((fruit, index) => {
                                    return <GoodItem key={index} obj={fruit} navigation={this.props.navigation}
                                    />
                                }
                            )}
                        </View>
                        <View style={styles.goodBox} tabLabel={'clothes'}>
                            {fruitlist.map((fruit, index) => {
                                    return <GoodItem key={index}
                                                     obj={fruit} navigation={this.props.navigation}/>
                                }
                            )}
                        </View>
                        <View style={styles.goodBox} tabLabel={'phone'}>
                            {fruitlist.map((fruit, index) => {
                                    return <GoodItem key={index} obj={fruit} navigation={this.props.navigation}/>
                                }
                            )}
                        </View>
                    </ScrollableTabView>
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
    swiper: {},
    slideShow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: 150
    },
    banner: {
        width: 360,
        height: 150
    },
    txt: {
        width: 120,
        height: 45,
    },
    tabContainer:{
        width: width,
        height: 600,
        backgroundColor:'white'
    },
    goodBox: {
        width: width,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})
export default HomeView;