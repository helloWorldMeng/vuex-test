<template>
  <div class="product-one">
    <div v-for='(item, index) in newProducts' :key='index'>
      {{item.name}}: {{item.price}}  {{item.tel}}
    </div>
    <button @click="reduce">减5</button>
    <button @click="add">加5</button>
    <button @click="actionsReduce">异步减5</button>
    <button @click="actionsAdd">异步加5</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'product-one',
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    newProducts () {
      return this.$store.getters.newProducts
    }
  },
  methods: {
    ...mapMutations({
      reduce: {type: 'reduce', amount: 5},
      add: {type: 'add', amount: 5}
    }),
    // reduce () {
    //   this.$store.commit('reduce', 5)
    // }
    // add () {
    //   this.$store.commit('add', 5)
    // }
    ...mapActions({
      actionsReduce: {type: 'reduce', amount: 5},
      actionsAdd: {type: 'add', amount: 5}
    })
    // actionsReduce () {
    //   this.$store.dispatch({type: 'reduce', amount: 5})
    // },
    // actionsAdd () {
    //   this.$store.dispatch({type: 'add', amount: 5})
    // }
  }
}
</script>

<style scoped>
  .product-one{
    background: #e4f7ff;
    width: 300px;
    height: 200px;
    margin: 10px auto;
    line-height: 50px;
    padding-top: 25px;
  }
</style>
