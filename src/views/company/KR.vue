<template>
    <!-- 韩国公司 -->
    <div class="kr_box">
        <Top />
        <Krcontent1 />
        <Link />
        <Krcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/kr/KR.css'
import Top from '@/components/common/Top.vue'
import Krcontent1 from '@/components/company/kr/Kr_content1.vue'
import Krcontent2 from '@/components/company/kr/Kr_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>