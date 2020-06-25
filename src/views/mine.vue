<template>
  <div class="home">
    <titleHeader :title="title" :isBack="isBack" ></titleHeader>
    我的
  </div>
</template>

<script>
// @ is an alias to /src
import titleHeader from "@/components/commons/titleHeader.vue"
export default {
  name: 'mine',
  data() {
    return {
      title: "猫眼电影",
      isBack: false
    }
  },
  components: {
    titleHeader
  }
}
</script>
