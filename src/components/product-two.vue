<template>
  <div class="product-two">
    <div v-for='(item, index) in newProducts' :key='index'>
      {{item.name}}: {{item.price}}  {{item.tel}}
    </div>
    <button @click="reduce">减10</button>
    <button @click="add">加10</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'product-two',
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
      reduce: {type: 'reduce', amount: 10},
      add: {type: 'add', amount: 10}
    })
    // add () {
    //   this.$store.commit('add', 5)
    // }
  }
}
</script>

<style scoped>
  .product-two{
    background: #f2f2f2;
    width: 300px;
    height: 200px;
    margin: 10px auto;
    line-height: 50px;
    padding-top: 25px;
  }
</style>
