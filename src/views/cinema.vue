<template>
  <div class="home">
    <titleHeader :title="title" :isBack="isBack" ></titleHeader>
    影院
  </div>
</template>

<script>
// @ is an alias to /src
import titleHeader from "@/components/commons/titleHeader.vue"
export default {
  name: 'cinema',
  data() {
    return {
      title: "影院",
      isBack: false
    }
  },
  components: {
    titleHeader
  }
}
</script>
