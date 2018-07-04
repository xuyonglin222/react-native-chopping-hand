import {observable,action} from 'mobx'

export default  class Order{
    @observable data={
        id:2,
        name:'苹果',
        image:require('../../images/a1.png'),
        post:'中通',
        goodMount:1,
        total:888,
        tag:'已完成'

    }
}