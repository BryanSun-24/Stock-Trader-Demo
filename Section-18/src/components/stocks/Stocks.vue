<template>
    <div>
        <div>
            <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        </div>
        <div>
            <input class="btn btn-primary" type="button" value="Input" @click="Yahoo">
            <p>{{ppp}}</p>
        </div>
    </div>
</template>
<script>
import Stock from './Stock.vue'
import axios from 'axios'

export default {
    data(){
        return{
            ppp: {}
        }
    },
    components:{
        appStock: Stock
    },
    computed:{
        stocks(){
            return this.$store.getters.stocks;
        }
    },
    methods:{
        async Yahoo(){
            var self = this;
            await self.makeRequest().then(res =>{
                self.ppp = res;
            })
        },
        async makeRequest(){
            const config = {
                "method":"GET",
                "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key":"643a16d7c4msh274821808fe37f9p117af8jsnc5c0fa903f93"
                },
                "params":{
                "region":"US",
                "lang":"en"
                }
            }
            let temp = axios(config);
            return await temp;
        }
    }
}
</script>