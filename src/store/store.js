import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  /**
   * state: 存储数据
   * **/
  state: {
    products: [
      {name: '商品1', price: '100', tel: '13522234456'},
      {name: '商品2', price: '200', tel: '16622234488'},
      {name: '商品3', price: '300', tel: '17722234489'}
    ]
  },
  /**
   * getters: state中派生出一些状态，如对列表进行过滤并计算
   * **/
  getters: {
    newProducts (state) {
      let newProducts = state.products.map(item => {
        return {
          name: '[' + item.name + ']',
          price: '¥' + item.price,
          tel: item.tel.substr(0, 3) + '****' + item.tel.substr(7, 3)
        }
      })
      return newProducts
    }
  },
  /**
   * mutation: 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
   * Mutation 必须是同步函数
   * **/
  mutations: {
    reduce (state, payload) {
      state.products.forEach(item => {
        item.price -= payload.amount
      })
    },
    add (state, payload) {
      state.products.forEach(item => {
        item.price += payload.amount
      })
    }
  },
  /**
   * actions: Action 类似于 mutation，不同在于：
   * Action 提交的是 mutation，而不是直接变更状态
   * Action 可以包含任意异步操作
   * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
   * **/
  actions: {
    reduce (context, payload) {
      setTimeout(() => {
        context.commit('reduce', payload)
      }, 1000)
    },
    add (context, payload) {
      setTimeout(() => {
        context.commit('add', payload)
      }, 1000)
    }
  }
})
export default store
