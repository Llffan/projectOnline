<template>
    <!-- 开曼公司 -->
    <div class="ky_box">
        <Top />
        <Kycontent1 />
        <Link />
        <Kycontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/ky/KY.css'
import Top from '@/components/company/common/Top.vue'
import Kycontent1 from '@/components/company/ky/Ky_content1.vue'
import Kycontent2 from '@/components/company/ky/Ky_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>