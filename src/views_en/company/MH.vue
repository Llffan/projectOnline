<template>
    <div class="mh_box">
        <Top />
        <Mhcontent1 />
        <Link />
        <Mhcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/company/mh/MH.css'
import Top from '@/components_en/company/common/Top.vue'
import Mhcontent1 from '@/components_en/company/mh/Mh_content1.vue'
import Mhcontent2 from '@/components_en/company/mh/Mh_content2.vue'
import Link from '@/components_en/company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>