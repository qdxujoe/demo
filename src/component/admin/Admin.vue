<template>   
  <!-- 左侧 -->
    <el-container style="height:100%">
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <!-- 头部 -->
        <el-container>
          <el-header>
            <header></header>
            
          </el-header>
          <!-- 主体 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>

import Aside from 'common/Aside';
import Header from 'common/Header';
export default{
  components: {
    Header:'',
    Aside:'',
  }
}
</script>

<style scoped >
  .el-header{
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>