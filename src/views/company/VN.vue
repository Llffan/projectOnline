<template>
    <!-- 越南公司 -->
    <div class="vn_box">
        <Top />
        <Vncontent1 />
        <Link />
        <Vncontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/vn/VN.css'
import Top from '@/components/company/common/Top.vue'
import Vncontent1 from '@/components/company/vn/Vn_content1.vue'
import Vncontent2 from '@/components/company/vn/Vn_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>