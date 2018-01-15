<template>   
  <div>
    <div class="top">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item >购物商城</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <el-button plain size="mini" icon="el-icon-plus">新增</el-button>
      <el-button plain size="mini" icon="el-icon-check">全选</el-button>
      <el-button plain size="mini" icon="el-icon-delete">删除</el-button>
    <!-- 输入框 -->
      <el-input style="width:300px;float: right;" size="mini" placeholder="请输入内容" prefix-icon="el-icon-search"  v-model="gsListQuery.searchvalue" @blur="getGoodsList"></el-input>
    </div>
    <!-- 表格 -->
    <div>
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="标题"> 
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" placement="right">
          <div slot="content">
            <img style="width:200px" :src="scope.row.imgurl" alt="商品预览">
          </div>
          <router-link to="{name:'goodsCtEdit',params:{id:scope.row.id}}">{{scope.row.title}}</router-link>
          </el-tooltip>>
        </template></el-table-column>
    <el-table-column prop="categoryname" label="所属类型" width="120"></el-table-column>
    <el-table-column prop="stock_quantity" label="库存"  width="120"> </el-table-column>
    <el-table-column prop="market_price" label="市场价"  width="120"> </el-table-column>
    <el-table-column prop="sell_price" label="销售价"  width="120"> </el-table-column>
    <el-table-column label="属性" width="120">
        <template slot-scope="scope">
          <i :class="['el-icon-picture', scope.row.is_slide == 1? 'active': '']" @click="modifyStatus(scope.row.id, 'is_slide', scope.row.is_slide == 1? false: true)"></i>
          <i :class="['el-icon-upload2', scope.row.is_top == 1? 'active': '']"  @click="modifyStatus(scope.row.id, 'is_top', scope.row.is_top == 1? false: true)"></i>
          <i :class="['el-icon-star-on', scope.row.is_hot == 1? 'active': '']" @click="modifyStatus(scope.row.id, 'is_hot', scope.row.is_hot == 1? false: true)"></i>        
        </template>
      </el-table-column>
      <el-table-column label="操作"  width="120"> 
        <template slot-scope="scope">
          <router-link :to="{name:'goodsCtEdit',params:{id:scope.row.id}}">修改</router-link>
        </template>
      </el-table-column>
  </el-table>
</div>
<!-- 分页 -->
<div>
    <el-pagination @size-change="sizeChange" @current-change="currentChange"
      :current-page="gsListQuery.pageIndex":page-sizes="page.pageSizes"
      :page-size="gsListQuery.pageSize" :total="page.total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</div>
</template> 
  
<script>
// 导出组件配置
export default {
    data() {
      return {
        tableData3: [{
          id: 103,
          title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
          is_top: 1,
          is_hot: 1,
          is_slide: 1,
          categoryname: "男装",
          img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          imgurl:"http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          goods_no: "NZ0000000002",
          stock_quantity: 200,
          market_price: 1000,
          sell_price: 800 
        },
        {id: 103,
          title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
          is_top: 1,
          is_hot: 1,
          is_slide: 1,
          categoryname: "男装",
          img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          imgurl:"http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          goods_no: "NZ0000000002",
          stock_quantity: 200,
          market_price: 1000,
          sell_price: 800 },         
      ] ,
      //请求接口所需的查询字符串
      gsListQuery:{
        pageIndex:1,
        pageSize:10,
        searchvalue:''
      },
      // 分页
      page:{
        pageSizes:[10,20,30,40],
        total:100
      }
      }
    },
    //获取商品列表数据
    methods: {
      getGoodsList(){
        this.$http.get(this.$api.gsList,{params:this.gsListQuery}).then(res=>{
          this.tableData3 = res.data.message;
          this.page.total=res.data.totalcout;
        });
      },
      modifyStatus(id,type,newStatus){
        this.tableData3.filter(goods=>goods.id==id)[0][type]=newStatus?1:0;
      },
      sizeChange(pageSize){
        this.gsListQuery.pageSize=pageSize;
        this.getGoodsList();
      },
      currentChange(pageIndex){
        this.gsListQuery.pageIndex=pageIndex;
        this.getGoodsList();
      },
    },
    created () {
      this.getGoodsList();
    }
  }
</script>

<style scoped lang="less">
  .active{
    color: pink;
  }
  
  .top{
    border: 1px solid #bbb3b35c;
    width: 100%;
    height: 30px;
    padding-top: 12px;
  }
  .btn{
    border: 1px solid #bbb3b35c;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
</style>