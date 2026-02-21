<template>
    <!-- 日本公司 -->
    <div class="jp_box">
        <Top />
        <Jpcontent1 />
        <Link />
        <Jpcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/jp/JP.css'
import Top from '@/components/common/Top.vue'
import Jpcontent1 from '@/components/company/jp/Jp_content1.vue'
import Jpcontent2 from '@/components/company/jp/Jp_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>