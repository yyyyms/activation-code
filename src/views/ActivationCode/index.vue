<template>
  <div class="container">
    <div class="main">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item class="input" label="机器码">
          <el-input v-model="formLabelAlign.code"></el-input>
        </el-form-item>
        <el-form-item class="input" label="秘钥">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <div class="block">
            <el-date-picker
              format="yyyy-MM-dd"
              value-format="timestamp"
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <div>
          <el-button class="button" @click="create" type="primary"
        >生成激活码</el-button>
        <el-button class="button" @click="copy" type="primary"
        >复制</el-button>
        </div>
        
      <div class="span">  {{ code }}</div>
      </el-form>
      
    </div>
  </div>
</template>

<script>
import { encStr, decryptStr } from "../../utils/aes_ecb";

export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        code: "",
        password: "sdl@201909admin",
      },
      value1: "",
      code: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    create() {
      console.log(this.value1);
      let actmsg = {
        code: this.formLabelAlign.code,
        password: this.formLabelAlign.password,
        endtime: this.value1,
        // start:this.value1[0],
        // end:this.value1[1]
      };
      console.log(actmsg);

      let str_enc = encStr(JSON.stringify(actmsg));
      console.info("加密后：", str_enc);
      this.code = str_enc;

      let str_dec = JSON.parse(decryptStr(str_enc));
      console.info("解密后：", str_dec);
    },
    copy(){
      this.$copyText(this.code).then(
	      e=>{
	        console.log('复制成功：', e);
	      },
	      e=>{
	        console.log('复制失败：', e);
	      })
    }
  },
  created() {},
  mounted() {
    // const md5 = require("md5-node");
    // console.log(md5("123456"), "加密后");
  },
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.container {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.main {
  width: 100%;
}
.input {
  width: 90vw;
}
.span {
  height: 200px;
  width: 100%; 
  text-align: center;
  overflow-wrap: break-word;
}
</style>