<template>
  <div class="nowplaying">
    <ul ref="scrollUl" :style='`transform: translateY(${top}px)`' @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" >
      <li class="box" v-for="item in movieList" :key="item.id">
        <div class="left">
          <img :src="item.img.replace('w.h','128.180')" alt />
        </div>
        <div class="right">
          <div class="txt">
            <p>{{item.nm}}</p>
            <p v-if="item.globalReleased && item.sc">
              观众评
              <span>{{item.sc}}</span>
            </p>
            <p v-else-if="item.globalReleased">暂无评分</p>
            <p v-else>
              <span>{{item.wish}}</span>人想看
            </p>
            <p>主演: {{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div
            class="btn"
            :style="{background: item.globalReleased? '#f03d37': '#3c9fe6'}"
          >{{item.globalReleased? '购票': '预售'}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nowplaying",
  data() {
    return {
      movieList: [],
      canScroll: true,  //标识是否可以滚动
      startLength: "",
      movieIds: [],
      startY: 0,
      touching: false,
      top: 0,
      state: 2
    };
  },
  async created() {
    this.getData();
    var _this = this
    // 上拉加载更多
    window.onscroll = async function(){ //绑定滚动事件
      if(document.documentElement.scrollTop + window.innerHeight >= _this.$refs.scrollUl.offsetHeight && _this.canScroll && _this.movieList.length != _this.total){ //到底了
        _this.canScroll = false;  //设置为不可滚动
        let movieIdArr = _this.movieIds.splice(_this.startLength, 10).join(","); //每次截取10个id进行数据获取
        let moreData = await _this.$http("/api/ajax/moreComingList?token=&movieIds="+movieIdArr);
        _this.movieList = _this.movieList.concat(moreData.data.coming);   //每次请求回来的数据拼接到movieList数组中进行渲染
        _this.canScroll = true; //渲染完成后, 将可滚动置为true
      }
    }
  },
  methods: {
    async getData(){
      let res = await this.$http("/api/ajax/movieOnInfoList?token="); //请求数据
      this.movieList = res.data.movieList;
      this.movieIds = res.data.movieIds;
      this.total = res.data.total;
      this.startLength = res.data.movieList.length;
    },
    // 下拉刷新
    touchStart(e){ //开始触摸
      if(!document.documentElement.scrollTop){
				this.startY = e.targetTouches[0].pageY  //获取开始触摸的初始位置
				this.touching = true    // 开启下拉刷新状态
			}
    },
    touchMove(e){
      if(!this.touching) return
      // 获取移动的距离
　　　let diff = e.targetTouches[0].pageY - this.startY 
      //判断是向上拉还是向下拉 
　　　 if(diff > 0) { 
        e.preventDefault()
　　　 } else {
　　　　　return 　　
      }
      this.top = Math.floor(diff) + (this.state === 2 ? 40 : 0)
      if(this.top >= 40){
　　　　　this.state = 1   //代表正在拉取
　　　} else {
　　　　　this.state = 0  // 代表初始转态
　　　}　　
    },
    touchEnd(e){
      this.touching = false
        if(this.state === 2) {
　　　　  this.top = 40
　　　　  return 
        }
　　　　// 判断抬起时的高度，是大于40 就开启刷新
　　　　if(this.top >= 40) {
　　　　  this.refresh()
　　　　} else {
　　　　　　this.state = 0
　　　　　　this.top = 0
　　　　}
    },
    refresh(){
			this.getData();	//获取数据
			this.top = 0
			this.state = 0
		}
  },
  destroyed() {
    window.onscroll = null;
  },
};
</script>

<style lang="scss" socped>
.nowplaying{
    margin-top: 99px;
}
.box {
  padding: 0 15px;
}

.box,
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right{
    padding: 15px 0;
    border-bottom: 1px solid rgb(228, 228, 228);
}
.nowplaying>ul{
  transition: all 2s;
}
.nowplaying>ul>li:last-child .right{
    border-bottom: none;
}

.left {
  width: 64px;
  height: 90px;
}

.left img {
  width: 100%;
  height: 100%;
}

.right {
  margin-left: 7px;
  flex: 1;
  align-items: center;
}

.txt {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.txt p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #666;
}

.txt p:nth-child(1) {
  max-width: 9em;
  font-size: 17px;
  font-weight: bold;
  color: #333;
}

.txt p:nth-child(2) span {
  font-size: 15px;
  color: #faaf00;
  font-weight: bold;
}

.txt p:nth-child(3) {
  max-width: 16em;
}

.btn {
  width: 47px;
  height: 27px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-right: 8px;
}
</style>