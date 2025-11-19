<template>
    <div class="vn_box">
        <Top />
        <Vncontent1 />
        <Link />
        <Vncontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/company/vn/VN.css'
import Top from '@/components_en/company/common/Top.vue'
import Vncontent1 from '@/components_en/company/vn/Vn_content1.vue'
import Vncontent2 from '@/components_en/company/vn/Vn_content2.vue'
import Link from '@/components_en/company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>