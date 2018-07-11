import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'
import ScrollableTabView, {DefaultTabBar}  from 'react-native-scrollable-tab-view';
import {width,height} from '../../api/screen';
import OrderItem from './OrderItem'
import {observer,inject}  from 'mobx-react'

@observer
@inject('rootStore')
export default class OrderView extends Component {
    static navigationOptions = {
        title: '我的订单',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 15, color: 'black'},
        headerStyle: {height: 38, backgroundColor: 'white', marginTop: 21},
        headerRight: <Image style={{width: 40, height: 40}}/>
    };
    constructor(props) {
        super(props);
        this.state={
            orderList:[]
        }
    }
    componentWillMount() {
        this._update();
    }

    _update(){
        let orderList = Array.from(this.props.rootStore.order.data);
        this.setState({
            orderList,
        })
    }


    render() {

        return <ScrollView style={styles.scrWrapper}>
            <ScrollableTabView
                tabBarBackgroundColor={'white'}
                tabBarActiveTextColor={'#e5779c'}
                style={{width: width, height: 900,}}
                tabBarUnderlineStyle={{backgroundColor: '#e5779c'}}
                renderTabBar={() => <DefaultTabBar/>}>
                <View  tabLabel={'全部'}>
                    {
                        this.state.orderList.map((order,index)=>{
                            return <OrderItem updateH={this._update.bind(this)} key={index} data={order} />
                        })
                    }
                </View>
                <View  tabLabel={'待收货'}>
                    {
                        this.state.orderList.map((order,index)=>{
                            if(order.tag==='待收货'){
                                return <OrderItem key={index} data={order} updateH={this._update.bind(this)} />
                            }
                        })
                    }
                </View>
                <View  tabLabel={'已完成'}>
                    {
                        this.state.orderList.map((order,index)=>{
                            if(order.tag==='已完成'){
                                return <OrderItem key={index} data={order} updateH={this._update.bind(this)} />
                            }
                        })
                    }
                </View>
            </ScrollableTabView>
        </ScrollView>
    }
}

const styles =StyleSheet.create({
    scrWrapper:{
        width:width,
        height:height,
    },
})