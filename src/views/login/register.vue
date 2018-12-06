<template>
  <div class="page flex-column" style="align-items: center;">
    <el-form :model="formData" status-icon :rules="rules" ref="formRef" label-width="80px" label-position="left">
      <h3 class="title">注册</h3>
      <el-form-item label="用户名" prop="userName" class="input-form">
        <el-input v-model.number="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd" class="input-form">
        <el-input type="password" v-model="formData.pwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="rePwd" class="input-form">
        <el-input type="password" v-model="formData.rePwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click="submitForm">
          立即注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {register} from '@/api/login'

  export default {
    data() {
      var validateUserName = (rule, value, callback) => {
        value = value + ''
        if (value.length < 3) {
          callback(new Error('用户名不能小于3位'))
        } else {
          callback()
        }
      }
      var validatePwd = (rule, value, callback) => {
        if (value.length < 4) {
          callback(new Error('密码不能小于4位'))
        } else {
          callback()
        }
      }
      var validateRePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formData.pwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        formData: {
          userName: '',
          pwd: '',
          rePwd: ''
        },
        rules: {
          userName: [
            {validator: validateUserName, trigger: 'blur'}
          ],
          pwd: [
            {validator: validatePwd, trigger: 'blur'}
          ],
          rePwd: [
            {validator: validateRePwd, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.formRef.validate((valid) => {
          if (valid) {
            register(this.formData.userName, this.formData.pwd, this.formData.rePwd)
              .then(data => {
                this.$message({
                  message: '恭喜你，注册成功！',
                  type: 'success'
                })
                this.$router.replace('/login')
              })
              .catch(error => {
                console.log(error)
              })
          }
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  .title {
    margin-top: 100px;
    font-size: 26px;
    text-align: center;
  }

  .input-form {
    width: 600px;
  }

</style>
