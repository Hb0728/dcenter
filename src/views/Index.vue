<template>
  <div class="home mx-3">
    <index_dataSituation></index_dataSituation>
    <el-row>
      <el-col :span="14">
        <often_use></often_use>
        <web_msg></web_msg>
      </el-col>
      <el-col :span="10" >
        <day_raking></day_raking>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import index_dataSituation from '../components/index_components/index_dataSituation'
import often_use from '../components/index_components/often_use'
import web_msg from '../components/index_components/web_msg'
import day_raking from '../components/index_components/day_raking'



export default {
  name: 'Index',
  components: {
    index_dataSituation,
    often_use,
    web_msg,
    day_raking,
  }
}
</script>
