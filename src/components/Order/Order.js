import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'
import ScrollableTabView, {DefaultTabBar}  from 'react-native-scrollable-tab-view';
import {width} from '../../api/screen';
import OrderItem from './OrderItem'


export default class OrderView extends Component {
    constructor(props) {
        super(props);
        this.state={
            orderList:[
                {
                    id:1,
                    name:'菠萝',
                    image:require('../../images/a1.png'),
                    post:'中通',
                    goodMount:1,
                    total:888,
                    tag:'待付款'
                },
                {
                    id:2,
                    name:'苹果',
                    image:require('../../images/a1.png'),
                    post:'中通',
                    goodMount:1,
                    total:888,
                    tag:'已完成'
                }
            ]
        }

    }

    static navigationOptions = {
        title: '我的订单',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black'},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerRight: <Image style={{width: 40, height: 40}}/>
    };

    render() {

        return <View style={styles.wrapper}>
            <ScrollableTabView
                tabBarBackgroundColor={'white'}
                tabBarActiveTextColor={'#e5779c'}
                tabBarUnderlineStyle={{backgroundColor: '#e5779c'}}
                renderTabBar={() => <DefaultTabBar/>}>
                <View  tabLabel={'全部'}>
                    {
                        this.state.orderList.map((order,index)=>{

                            return <OrderItem key={index} data={order} />
                        })
                    }
                </View>
                <View  tabLabel={'待付款'}>
                    {
                        this.state.orderList.map((order,index)=>{
                            if(order.tag==='待付款'){
                                return <OrderItem key={index} data={order} />
                            }
                        })
                    }
                </View>
                <View  tabLabel={'已完成'}>
                    {
                        this.state.orderList.map((order,index)=>{
                            if(order.tag==='已完成'){
                                return <OrderItem key={index} data={order} />
                            }
                        })
                    }
                </View>
            </ScrollableTabView>
        </View>
    }
}

const styles =StyleSheet.create({
    wrapper:{
        width:width,
        height:9000
    }
})