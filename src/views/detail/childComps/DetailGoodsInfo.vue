<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

// <script>
	export default {
		name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLenght: 0
      }
    },
    methods: {
      imgLoad() {
        // 1.通过总线传输事件，在父组件中用防抖函数(子传父,父如何在mounted里面调用子事件？？？)
        //看到博客园通过const Event = new Vue();创建事件调度器 类似于总线
        // this.$bus.$emit('imageLoad');
        this.$emit('imageLoad');

        //2.测试此方法无用 第38到49行
    //     if (++this.counter === this.imagesLenght) {
    //       console.log(this.imagesLenght);
    //       console.log('22');
    //       this.$emit('imageLoad');
    //     }
      }
    },
    // watch: {
    //   detailInfo() {
    //     this.imagesLenght = this.detailInfo.detailImage[0].list.lenght
    //   }
    // }
	}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>
