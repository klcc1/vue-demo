<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="white"
        >
        <el-menu-item  @click="clickMenu0()" index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"> 首页 </span>
          </el-menu-item>
          <el-menu-item @click="clickMenu()" index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"> 用户列表 </span>
          </el-menu-item>
          <el-menu-item @click="clickMenu1()" index="2">
            <i class="el-icon-setting"></i>
            <span slot="title"> 用户管理 </span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "compon",
  data() {
    return {
      a: {},
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu() {
      this.$router.push("/user");
    },
    clickMenu1() {
      this.$router.push("/back");
    },
    clickMenu0(){
        this.$router.push("/mind");
    }
  },
};
</script>

<style>
.el-row {
  height: 100vh;
}
.el-menu-vertical-demo {
  width: 199px;
  height: 100vh;
}
</style>