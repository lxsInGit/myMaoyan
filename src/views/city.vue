<template>
    <div>
        <!-- <ul>
            <li v-for="(item,index) in letterArr" :key="index">
                <span>{{item.title}}</span>
                <ul>
                    <li @click="goBack(one)" v-for="one in item.content" :key="one.cityId">{{one.name}}</li>
                </ul>
            </li>
        </ul> -->
        <mt-index-list :showIndicator="false">
            <template  v-for="(item,index) in letterArr" >
                <mt-index-section :index="item.title" :key="index">
                    <mt-cell @click.native="goBack(one)" v-for="one in item.content" :key="one.cityId" :title="one.nm"></mt-cell>
                </mt-index-section>
            </template>
        </mt-index-list>
    </div>
</template>

<script>
import { IndexList, IndexSection } from 'mint-ui';  //引入mintUi里面的IndexList和IndexSection组件
export default {
    components: {IndexList, IndexSection},
    data() {
        return {
            cityList: [],
            letterArr: []
        }
    },
    methods: {
        goBack(one){
            this.$router.go(-1);    //返回上一页
            this.$store.commit("changeDisplay", true);  //显示tabbar
            this.$store.commit("changeCity", one.nm); //改变城市名称
        }
    },
    async created() {
        let res = await this.$http("/api/dianying/cities.json");
        this.cityList = res.data.cts    //获取到的数据
        for(var i=65; i<91; i++){   //循环城市字母
            if(String.fromCharCode(i)=='I' || String.fromCharCode(i)=='O' || String.fromCharCode(i)=='U' || String.fromCharCode(i)=='V'){
                continue;
            }else{
                this.letterArr.push({title: String.fromCharCode(i), content: []})   //[{title: 'A', content: []},{title: 'B', content: []}...]
            }
        }
        this.letterArr.forEach(item=>{  //循环22个城市字母
            this.cityList.forEach(one=>{    //循环所有城市
                if(one.py.charAt(0).toUpperCase() == item.title){   //判断当前城市的拼音首字母如果与22个城市字母中的字母匹配
                    item.content.push(one)  //将匹配的城市添加到该城市字母的content数组中
                }   
            })
        })

        console.log(this.letterArr)
    },
}
</script>

<style lang="scss" scoped>
    
</style>