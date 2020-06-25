<template>
  <div class="film">
    <titleHeader :title="title" :isBack="isBack"></titleHeader>
    <div class="tabs">
      <span @click="toCity">
        {{city}}
        <i class="iconfont icon-shang"></i>
      </span>
      <ul>
        <li
          @click="changeTab(item)"
          v-for="item in list"
          :key="item.title"
          :class="{'active': item.title==nowItem}"
        >{{item.title}}</li>
      </ul>
      <span class="iconfont icon-searchicon" @click="toSearch"></span>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
let markItem = "正在热映";
import titleHeader from "@/components/commons/titleHeader.vue";
import { mapState } from "vuex";
export default {
  name: "film",
  data() {
    return {
      title: "猫眼电影",
      isBack: false,
      list: [
        { title: "正在热映", name: "nowplaying" },
        { title: "即将上映", name: "comingsoon" }
      ],
      nowItem: markItem
    };
  },
  watch: {
    $route(val) {
      switch (val.name) {
        case "nowplaying":
          this.nowItem = "正在热映";
          break;
        case "comingsoon":
          this.nowItem = "即将上映";
          break;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    //通过组件导航守卫, 获取当前进入的组件名, 再对应设置nowItem, 避免刷新出错
    next();
    switch (to.name) {
      case "nowplaying":
        markItem = "正在热映";
        break;
      case "comingsoon":
        markItem = "即将上映";
        break;
      default:
        break;
    }
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    changeTab(item) {
      this.$router.push({ name: item.name });
      this.nowItem = item.title;
    },
    toCity() {
      this.$router.push("/city"); //跳转到城市列表页
      this.$store.commit("changeDisplay", false);
    },
    toSearch() {
      this.$router.push("/search"); //跳转到搜索页
      this.$store.commit("changeDisplay", false);
    }
  },
  components: {
    titleHeader
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  position: fixed;
  z-index: 2;
  top: 54px;
  left: 0;
  right: 0;
  background: #fff;
}
.tabs > ul {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  color: #666;
  font-weight: 700;
  margin: 0 20px;
}
.tabs ul li {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}
.tabs ul li.active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.tabs > span:nth-of-type(1) {
  color: #666;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.tabs > span:nth-of-type(1) i {
  color: #666;
  font-size: 12px;
}
.tabs > span:nth-of-type(2) {
  color: #e54847;
  font-size: 26px;
}
</style>