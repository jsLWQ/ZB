<template>
  <div class="box">
      <div v-for="(item,index) in arr" :key="index" :class="[arrIndex == index?'seletered ': 'a','div']" @click="itemclick(index)">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {
          name: 'hha '
        },
        {
          name: 'heihei'
        },
        {
          name: '789'
        },
        {
          name: '456'
        }
      ],
      arrIndex: 0
    }
  },
  methods: {
    itemclick (e) {
      this.arrIndex = e
    }
  }
}
</script>
<style  scoped>
.box {
  /* display: flex; */
}
.div{
  /* display: inline-block; */
  display: inline-block;
  border: 1px solid #000;
  text-align: center;
  width: 19%;
  padding: 4px 0;
  font-size: 14px;
  margin-left: -1px;
  /* border: 1px solid #000;
  text-align: center;
  width: 19%;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 14px;
  display: flex;
  margin-left: -1px; */
}
.seletered {
  /* position: absolute; */
  border: 1px solid red !important;
  /* border-right: 1px solid red !important; */
  /* margin-right: -1px; */
  z-index: 99;
  color: blue;
/*   border: 1px solid red;
  color: blue; */
}
.a {
  border-left: none;
}
</style>