import {debounce} from './utils.js';
import BackTop from 'components/content/backTop/BackTop';

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

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = position.y < -1000
    }
  }
}

//在组件中导入，通过mixins: [itemListListenerMixin],调用，避免重复的代码
