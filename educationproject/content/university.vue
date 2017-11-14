<template>
	 <table>
	 	<thead>
	 		<tr>
	 			<th v-for="(v,i) in title" :key="i">{{v}}</th>
	 		</tr>
	 	</thead>
	 	<slot></slot>
	 </table>
</template>
<script>
	export default {
		props:{
			title:{
				required:true,
				type:Array
			}
		}
	}
</script>
<style>
		table{
			border-collapse: collapse; 
		}
		table tbody tr td{
			border: 1px solid #ccc;
		}
		.tables{
			font-size: 16px;
			min-width: 960px;
			max-width: 96%;
			box-sizing: border-box;
			clear:both;
			margin-top: 30px;
		}
		.tables table{
			width: 100%;
		}
		.tables table tr{
			height: 40px;
		}
		.tables tr th{
			background: rgba(0, 160, 92, 1);
			font-size: 14px;
			color: white;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.tables tbody tr td{
			font-size: 14px;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		
</style>