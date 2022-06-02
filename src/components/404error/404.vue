<template>
    <div class="error-page">
        <div class="content">
            <h1>404</h1>
            <div class="desc">抱歉，你访问的页面不存在</div>
            <div class="actions">
                <router-link :to="{path:'/'}">
                    <el-button type="primary" style="margin-top: 2rem;">返回首页</el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '404'
    };
</script>

<style scoped>

</style>