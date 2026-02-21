<template>
    <!-- 德国公司 -->
    <div class="de_box">
        <Top />
        <Decontent1 />
        <Link />
        <Decontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/de/DE.css'
import Top from '@/components/common/Top.vue'
import Decontent1 from '@/components/company/de/De_content1.vue'
import Decontent2 from '@/components/company/de/De_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>