<template>
  <main>
    <h1>{{ title }}</h1>
    <div>
        公共头部
        <router-view></router-view>
        公共底部
    </div>
  </main>
  
</template>

<script>
// 导出组件配置
export default {
    data() {
        return {
            title: 'Hello Vue!'
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
