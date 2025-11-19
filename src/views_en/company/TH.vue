<template>
    <div class="th_box">
        <Top />
        <Thcontent1 />
        <Link />
        <Thcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/company/th/TH.css'
import Top from '@/components_en/company/common/Top.vue'
import Thcontent1 from '@/components_en/company/th/Th_content1.vue'
import Thcontent2 from '@/components_en/company/th/Th_content2.vue'
import Link from '@/components_en/company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>