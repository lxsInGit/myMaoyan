<template>
  <div class="search">
    <titleHeader :title="title" :isBack="isBack"></titleHeader>
    <div class="boxSearch">
      <div class="searchHearder">
        <div class="wrapper">
          <i class="iconfont icon-searchicon"></i>
          <input type="text" placeholder="搜电影、搜影院" />
          <i class="iconfont icon-shang1" v-show="false"></i>
        </div>
        <div class="cancel" @click="toLastPage">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import titleHeader from "@/components/commons/titleHeader.vue";
export default {
  name: "search",
  data() {
    return {
      title: "猫眼电影",
      isBack: true
    };
  },
  methods: {
    toLastPage() {
      this.$router.go(-1);
    }
  },
  components: {
    titleHeader
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #f5f5f5;
  height: 100vh;
}
.boxSearch {
  margin-top: 54px;
}
.searchHearder {
  padding: 8px 0 8px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  flex: 1;
}
.wrapper > input {
  border: none;
  font-size: 13px;
  color: #333;
  line-height: 20px;
  padding: 4px 0;
  width: calc(100% - 40px);
}
.cancel {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 16px;
  color: #f03d37;
}
</style>