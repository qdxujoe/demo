<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

        <!-- 一个菜单项, 记得配置index属性, 不配置会有问题 -->
        <el-submenu v-for="item in menu" :key="item.title" :index="item.title">

            <!-- 标题内容 -->
            <template slot="title">
                <i class="el-icon-sold-out"></i>
                <span>{{ item.title }}</span>
            </template>

            <!-- 子菜单列表 -->
            <el-menu-item v-for="subitem in item.children" :key="subitem.title" :index="subitem.title">
                <router-link :to="subitem.path">{{ subitem.title }}</router-link>
            </el-menu-item>

        </el-submenu>

    </el-menu>

</template>

<script>
    // 导出组件配置
    export default {
        data() {
            return {
                menu: [{
                        title: '资源下载',
                        children: [{
                                title: '内容管理',
                                path: '/a'
                            },
                            {
                                title: '类别管理',
                                path: '/b'
                            },
                            {
                                title: '评论管理',
                                path: '/c'
                            },
                        ]
                    },
                    {
                        title: '购物商城',
                        children: [{
                                title: '内容管理',
                                path: '/a'
                            },
                            {
                                title: '类别管理',
                                path: '/b'
                            },
                            {
                                title: '评论管理',
                                path: '/c'
                            },
                        ]
                    },
                    {
                        title: '订单管理',
                        children: [{
                                title: '内容管理',
                                path: '/a'
                            },
                            {
                                title: '类别管理',
                                path: '/b'
                            },
                            {
                                title: '评论管理',
                                path: '/c'
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    a{
            text-decoration: none;
            color: brown;
           
        }
        .el-menu{
            background-color: #d3dce6;
        }
</style>