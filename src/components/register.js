import productOne from './product-one'
import productTwo from './product-two'

export default {
  install (Vue) {
    Vue.component('product-one', productOne)
    Vue.component('product-two', productTwo)
  }
}
