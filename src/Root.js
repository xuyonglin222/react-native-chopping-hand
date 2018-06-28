/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'

import LoginView from './components/Page/LoginView';
import RegisterView from './components/Page/RegisterView';
import ForgetPsdView from './components/Page/ForgetPsd';
import VerifyView from './components/Page/VerifyView';
import SetPsdView from './components/Page/SetPsdView';
import GoodPageView from './components/Page/GoodPageView'
import HomeView from './components/Home/HomeView';

import CartView from './components/Cart/CartView';
import MineView from './components/Mine/MineView';
import LikeView from './components/Like/like';

import TabBarItem from './components/TabBarItem'

const Tab = TabNavigator({
        Home: {
            screen: HomeView,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        selectedImage={require('./images/homeSelect.png')}
                        normalImage={require('./images/home.png')}
                    />
                )
            }
        },
        Like: {
            screen: LikeView,
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        selectedImage={require('./images/likeSelect.png')}
                        normalImage={require('./images/like.png')}
                    />
                )
            }
        },
        Cart: {
            screen: CartView,
            navigationOptions: {
                tabBarLabel: '购物车',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        selectedImage={require('./images/cartSelect.png')}
                        normalImage={require('./images/cart.png')}
                    />
                )
            }
        },
        Mine: {
            screen: MineView,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        selectedImage={require('./images/mineSelect.png')}
                        normalImage={require('./images/mine.png')}
                    />
                )
            }
        }
    },
    // tabScreen配置
    {
        tabBarComponent: TabBarBottom, // 自定义
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#e5779c',
            inactiveTintColor: '#71777c',
            labelStyle: {
                fontSize: 12, // 文字大小
            }
        }

    }
)

export default StackNavigator(
    {
        Tab: {
            screen: Tab,
        },
        Login: {
            screen: LoginView,
            navigationOptions: {
                header: null
            }
        },

        GoodPage:{
            screen: GoodPageView,
        },
        Register: {
            screen: RegisterView,
            navigationOptions: {
                header: null
            }
        },
        ForgetPsd: {
            screen: ForgetPsdView,
            navigationOptions: {
                header: null
            }
        },
        Verify: {
            screen: VerifyView,
            navigationOptions: {
                header: null
            }
        },
        SetPsd: {
            screen: SetPsdView,
            navigationOptions: {
                header: null
            }
        },
    }, {
        navigationOptions: {
            // 开启动画
            animationEnabled: true,
            // 开启边缘触摸返回
            gesturesEnabled: true
        },
        mode: 'card'
    })

