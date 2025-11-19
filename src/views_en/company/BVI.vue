<template>
    <div class="bvi_box">
        <Top />
        <Bvicontent1 />
        <Link />
        <Bvicontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/company/bvi/BVI.css'
import Top from '@/components_en/company/common/Top.vue'
import Bvicontent1 from '@/components_en/company/bvi/Bvi_content1.vue'
import Bvicontent2 from '@/components_en/company/bvi/Bvi_content2.vue'
import Link from '@/components_en/company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>