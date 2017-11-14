<template>
	 <div class="filterbox">
            <div class="condations">
                <div class="leftitle">已选条件:</div>
                <div class="rightarea">
                    <span v-if="rangeitem!='不限'">{{rangeitem}}<em @click="removerange">X</em></span>
                    <span v-if="areaitem!='不限'">{{areaitem}}<em @click="removearea">X</em></span>
                </div>
            </div>
            <div class="education">
                <div class="major clear">
                    <div class="leftitle">专业层次:</div>
                    <div class="rightarea"></div>
                </div>
                <ranges v-bind:rangelist="$store.state.schoolrangeobj"></ranges>
                <schoolareas v-bind:arealist="$store.state.schoolareaobj"></schoolareas>
                <colleges></colleges>
                <div class="tables">
	            	<university :title="tabletitle">
	            		<unimajor v-for="(v,i) in tablecontent" :contents="v" :key="i"></unimajor>
	            	</university>
	            </div>
            </div>
            
        </div>
</template>
<script>
	import range from './range.vue';
	import area from './area.vue';
	import colleges from './colleges.vue';
	import university from './university.vue';
	import unimajor from './unimajor.vue';
	export default {
		data:function(){
			return {
				tabletitle:[],
				tablecontent:[]
			}
		},
		computed:{
			"rangeitem":function(){
				return this.$store.getters.selectedrange;
			},
			"areaitem":function(){
				return this.$store.getters.selectedarea;
			}
		},
		created:function(){
			var vm=this;
			this.$http.get('data/range.json').then(function(res){
				//console.log(res.data.list);
				let rangedata = res.data.list.map((value,index)=>{
                    return index==0?{value:value,selected:true}:{value:value,selected:false}
                });
                vm.$store.commit('updaterange',rangedata);
			})
            this.$http.get('data/area.json').then(function(res){
				//console.log(res.data.list);
				let areadata = res.data.list.map((value,index)=>{
                    return index==0?{value:value,selected:true}:{value:value,selected:false}
                });
                vm.$store.commit('updatearea',areadata);
			})
            this.$http.get('data/university.json').then(function(res){
				//console.log(res.data.result.title);
				vm.tabletitle=res.data.result.title;
				vm.tablecontent=res.data.result.rows;
				console.log(vm.tabletitle);
			})    
      	},
		methods:{
			removerange:function(){
				this.$store.commit('clearrange');
			},
			removearea:function(){
				this.$store.commit('cleararea');
			}
		},
		components:{
			"ranges":range,
			"schoolareas":area,
			"colleges":colleges,
			"university":university,
			"unimajor":unimajor
		},
		
	}
</script>
<style>
	.filterbox{
	    width: 100%;
	    margin: 10px auto;
	}
	.lefttitle,.rightarea{
	    float: left;
	    box-sizing: border-box;
	}
	.lefttitle{
	    margin: 5px 0;
	    text-indent: 10px;
	    width: 10%;
	}
	.rightarea{
	    width: 90%;
	}
	.condations{
	    padding: 10px;
	    line-height: 35px;
	    display: flex;
	}
	.condations span{
	    display: inline-block;
	    padding: 2px 15px;
	    border: 1px solid #999;
	    margin: 0 15px;
	    position: relative;
	}
	.condations span em{
	    position: absolute;
	    right: 3px;
	    top: 0px;
	}
	.education{
	    border: 1px solid #ccc;
	    padding: 0 10px;
	    line-height: 35px;
	    width: 100%;
	    height: auto;
	}
	.items{
	    display: inline-block;
	    min-width: 70px;
	    padding: 0 5px;
	    height: 35px;
	    color: #333333;
	    text-align: center;
	    line-height: 35px;
	    margin: 5px;
	    cursor: pointer;
	}
	.items.selected{
	    background: rgba(0, 160, 92, 1);
	    color: #fff;
	}
	.items:hover{
	    background: rgba(0, 160, 92, 1);
	    color: #fff;
	}   
</style>