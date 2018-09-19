import Vue from 'vue'
import Example from '../../components/Example.vue'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Frontend Bootstrap!'
  },
  components: { Example }
})
