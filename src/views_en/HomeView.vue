<template>
    <div class="father_box">
        <!-- 顶部导航栏 -->
        <Top2 />
        <!-- 轮播图 -->
        <Content1 />
        <!-- 业务介绍 -->
        <Content2 />
        <!-- 海外银行开户 -->
        <Content3 />
        <!-- 视察滚动 -->
        <Content4 />
        <Content5 />

        <Bottom1 />
    </div>
</template>

<script setup>
import 'element-plus/es/components/carousel/style/css'
import 'element-plus/es/components/carousel-item/style/css'
import '@/css_en/homeView/HomeView.css'
import Top2 from '@/components_en/homeView/top/Top2.vue'
import Content1 from '@/components_en/homeView/content/Content1.vue'
import Content2 from '@/components_en/homeView/content/Content2.vue'
import Content3 from '@/components_en/homeView/content/Content3.vue'
import Content4 from '@/components_en/homeView/content/Content4.vue'
import Content5 from '@/components_en/homeView/content/Content5.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>

<style scoped lang="scss"> 

</style>