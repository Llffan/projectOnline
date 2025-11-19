<template>
    <div class="sg_box">
        <Top />
        <Sgcontent1 />
        <Link />
        <Sgcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/sg/SG.css'
import Top from '@/components/company/common/Top.vue'
import Sgcontent1 from '@/components/company/sg/Sg_content1.vue'
import Sgcontent2 from '@/components/company/sg/Sg_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>