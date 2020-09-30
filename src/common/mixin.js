import {debounce} from './utils.js'

export const itemListListenerMixin = {
  components: {},
  methods: {},
  data() {
    return {
      itemListListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    
    this.itemListListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemListListener)
  }
}

//在组件中导入，通过mixins: [itemListListenerMixin],调用，避免重复的代码
