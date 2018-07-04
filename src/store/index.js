import {observable, action,computed} from 'mobx';
import Goods from "../api/goodList";

class Cart {
    @observable data=[];
    @observable total=0;

    @action getTotal(){
        let t = 0;
        this.data.map((item)=>{
            t+=item.price*item.goodMount
        });
        return t;
    }


    @action
    addMount(id){
        this.data[id].goodMount++;
    }
    @action
    reduceMount(id){
        this.data[id].goodMount--;
    }
    /**
     * 加入购物车
     */
    @action
    addItem(item){
        this.data.push(item);
    }
    /**
     * getdata
     *
     */
    @action
    getData(){
        return this.data;
    }
    /**
     * 从购物车中移除
     */
    @action
    delItem(item){
        let index = this.data.indexOf(item);
        if(index>-1){
            this.data.splice(index,1);
        }
    }
}

 class GoodList {
    @observable data=Goods;

     @action
     getItem(i){
         return this.data[i-1];
     }
     @action
    getData(){
        return this.data;
    }
    /**
     * 收藏
     */
    @action
    doCollect(i){
        this.data[i-1].isLike=true;
    }
     /**
      * 取消收藏
      */
     @action
     doNotCollect(i){
         this.data[i-1].isLike=false;
     }
    /**
      * 加入购物车的状态
      */
     @action
     doIncCart(i){
         this.data[i-1].inCart=true;
     }

     /**
      * 移除购物车的状态
      */
     @action
     doNotInCart(i){
         this.data[i-1].inCart=false;
     }
}

export const cartGoods = new Cart();
export const goodList = new GoodList();
