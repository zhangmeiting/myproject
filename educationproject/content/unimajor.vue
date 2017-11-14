<template>
	 <tbody>
	 	<tr><td v-for="(v,i) in itemuniversity" :key="i"><span v-if="i==0" @click="shows">{{letters}}</span>{{v}}</td></tr>
	 	<tr>
	 		<td colspan="9">
	 			<table class="intable" v-show="cover">
	 				<thead>
	 					<tr>
	 						<th>高校地区</th>
	 						<th>高校名称</th>
	 						<th>专业(类)</th>
	 						<th>类中所含专业</th>
	 						<th>选考科目范围</th>
	 					</tr>
	 					<tr v-for="(val,x) in itemtable" :key="x">
	 						<td>{{val.province}}</td>
	 						<td>{{val.collegeName}}</td>
	 						<td>{{val.majorName}}</td>
	 						<td>{{val.remark.join('、')}}</td>
	 						<td>{{val.subjectRangeNames.join(',')}}</td>
	 					</tr>
	 				</thead>
	 			</table>
	 		</td>
	 	</tr>
	 </tbody>
</template>
<script>
	export default {
		props:['contents'],
		data(){
			return {
				itemuniversity:[],
				itemtable:[],
				cover:false,
				letters:'+'
			}
		},
		created:function(){
			console.log(this.contents);
			this.itemuniversity=this.contents.slice(0,9);
			this.itemtable=this.contents[9];
			console.log(this.itemtable);
		},
		methods:{
			shows:function(){
				this.cover=!this.cover;
				if(this.cover){
					this.letters="一";
				}else{
					this.letters="+";
				}
			}
		}
	}
</script>
<style>
		tbody span{
			float: left;
			width: 25px;
			height: 20px;
			line-height: 20px;
			text-align: center;
			background: rgba(0, 160, 92, 1);
			color: white;
			font-size: 18px;
			margin:15px; 
		}
		tbody tr:nth-child(2){
			height: 0px;
		}
		tbody{
			border-collapse: collapse; 
		}
		tbody tr td{
			border: 1px solid #ccc;
		}
		.intable{
			border-collapse: collapse; 
		}
		.intable tr td{
			border: 1px solid #ccc;
		}
		.intable{
			width: 100%;
		}
		.intable  tr{
			height: 40px;
		}
		.intable tr th{
			background: #eee;
			font-size: 14px;
			color: #000;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.intable tr td{
			background: #eee;
			color: #000;
			font-size: 14px;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
	</style>