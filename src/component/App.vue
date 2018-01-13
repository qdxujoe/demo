<template>
  <main>
    <h1>{{ title }}</h1>
    <div>
        公共头部
        <router-view></router-view>
        公共底部
    </div>
    <el-rate
    v-model="value"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
  </main>
  
</template>

<script>
// 导出组件配置
export default {
    data() {
        return {
            title: 'Hello Vue!',
            value: 3,
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 30px;
    color: red;
}
</style>
