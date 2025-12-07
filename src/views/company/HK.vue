<template>
    <!-- 香港公司 -->
    <div class="hk_box">
        <Top />
        <Hkcontent1 />
        <Link />
        <Hkcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/hk/HK.css'
import Top from '@/components/company/common/Top.vue'
import Hkcontent1 from '@/components/company/hk/Hk_content1.vue'
import Hkcontent2 from '@/components/company/hk/Hk_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>