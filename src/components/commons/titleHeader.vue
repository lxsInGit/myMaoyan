<template>
    <div class="titleHeader">
        <span v-if="isBack" @click='toFormerPage'>&lt;</span>
        {{title}}
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        isBack: Boolean
    },
    methods:{
        toFormerPage(){
            this.$router.go(-1);
            this.$store.commit("changeDisplay", true);
        }
    }
}
</script>

<style lang="scss" scoped>
    .titleHeader{
        position: fixed;
        z-index: 2;
        left: 0;
        right: 0;
        top: 0;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        background: #e54847;
        color: #fff;
    }
    .titleHeader span{
        position: absolute;
        left: 0;
    }
</style>