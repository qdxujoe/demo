<template>
    <div class="box">
        <h1 ref="wokaixin">后台管理</h1>
        <!-- model用来关联表单数据, rules用来指定校验规则 -->
        <el-form label-position="left" label-width="60px" ref="ruleForm2" :model="formLabelAlign" :rules="rules">
            <!-- 如果要表单校验与重置功能, 必须加上prop属性 -->
            <el-form-item label="账号" prop="uname">
                <el-input v-model="formLabelAlign.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="upwd">
                <el-input v-model="formLabelAlign.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">立即登陆</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            // 校验账号, 将来配置到下面的validator配置项
            function unameFn(rule, value, callback) {
                if (value == '') {
                    callback(new Error('账号不能为空'))
                } else {
                    callback();
                }
            }
            // 校验密码, 将来配置到下面的validator配置项
            function upwdFn(rule, value, callback) {
                if (value == '') {
                    callback(new Error('密码不能为空'))
                } else {
                    callback();
                }
            }
            return {
                // 表单提交的数据
                formLabelAlign: {
                    uname: '',
                    upwd: ''
                },
                // 表单校验规则
                rules: {
                    uname: [{
                            required: true,
                            message: '请填写账号',
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 18,
                            message: '账号在5~18位',
                            trigger: 'blur'
                        },
                        {
                            validator: unameFn,
                            trigger: 'blur'
                        }
                    ],
                    upwd: [{
                            validator: upwdFn,
                            trigger: 'blur'
                        },
                        {
                            pattern: /^\w{6,18}$/,
                            message: '密码在6~18位',
                            trigger: 'blur'
                        },
                    ]
                }
            }
        },
        methods: {
            // 登陆
            login() {
                this.$http.post(this.$api.login, this.formLabelAlign).then(res => {
                    if (res.data.status == 0) {
                       let nextPage=this.$route.query.nexpage;
                       this.$router.push({
                           path:nextPage?nextPage:'/admin'
                       });
                    } else {
                        this.$alert(res.data.message);
                    }
                });
            },
            // 表单提交
            submitForm(formName) {
                // 通过ref引用得到form表单元素, 然后调用validate方法去校验全部字段, 
                // 全部字段都通过校验, 那么回调收到的值为true, 否则为false
                // $refs是vue提供的用于替代传统的dom方法获取方式
                // this.$refs.wokaixin = document.querySelector('h1')
                // this.$refs.ruleForm2 = document.querySelector('form')
                this.$refs[formName].validate(result => {
                    // 全部都通过校验才登陆
                    if (result) {
                        this.login();
                    }
                    // 有一个错误也不行
                    else {
                        this.$alert('哥们! 不带这么玩的');
                    }
                });
            },
            // 重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
     .box{
        width: 400px;
        height: 300px;
        border: 1px solid rgb(247, 10, 10);
         margin:  150px auto;
        border-radius: 6px;
        padding: 0px 30px; 
        text-align: center;
    }
    
    h1{
        text-align: center;
        color: rgb(247, 10, 10);
    }
</style>