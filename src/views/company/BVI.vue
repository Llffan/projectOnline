<template>
    <!-- BIV公司 -->
    <div class="bvi_box">
        <Top />
        <Bvicontent1 />
        <Link />
        <Bvicontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/bvi/BVI.css'
import Top from '@/components/common/Top.vue'
import Bvicontent1 from '@/components/company/bvi/Bvi_content1.vue'
import Bvicontent2 from '@/components/company/bvi/Bvi_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>