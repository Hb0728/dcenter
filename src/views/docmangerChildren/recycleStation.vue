<template>
  <div class='recycleStation'>
      <doc_header headerName="下架文档"></doc_header>
      <doc_list></doc_list>
  </div>
</template>

<script>
import doc_list from '../../components/doc_components/doc_list'
import doc_header from '../../components/doc_components/doc_header'
  export default {
    name :'recycleStation',
    components: {
      doc_list,
      doc_header,
    },
    data() {
      return {
        
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
  
</style>