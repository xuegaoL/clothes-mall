import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
    //mutations唯一的目的是修改state中的状态
    //mutations中的方法尽可能完成比较单一的事件
    [ADD_COUNTER](state, payload)  {
      payload.count++
    },
    [ADD_TO_CART](state, payload) {
      state.cartList.push(payload)
    }
  }
