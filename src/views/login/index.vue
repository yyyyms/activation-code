<template>
   <div class="container">
    <div class="login">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <!-- <i class="el-icon-user-solid"></i> -->
          <el-input
            type="password"
            v-model="formInline.user"
            placeholder="登录密码"
          >
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        formInline:{
            user:''
        }
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit(){
      this.$router.push('/Home')

        if (this.formInline.user === 'sdl@201909') {
            this.$message('登录成功')
            
        }else{
            this.$message('密码错误')
        }
    }
  },
  created() {},
  mounted() {
    
  },
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.container {
  /* background-color: ; */
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.demo-form-inline {
  display: flex;
  flex-direction: column;
}
.container >>> .el-input__inner {
  border-radius: 20px;
}
.container >>> .el-button {
  border-radius: 20px;
  width: 100%;
}
.container >>> .el-form-item {
  margin-bottom: 10px;
  width: 100%;
}
.container >>> .el-form-item__content {
  width: 100%;
}
.container >>> .el-button--primary {
  background-color: #595a5c;
}
.MachineCode {
  text-align: right;
  /* padding-right: 20px; */
  font-size: small;
  cursor: pointer;
}
.code {
  margin-top: 10px;
  width: 200px;
  /* overflow: hidden; */
  word-wrap: break-word;
}
</style>