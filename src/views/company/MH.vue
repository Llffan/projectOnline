<template>
    <!-- 马绍尔公司 -->
    <div class="mh_box">
        <Top />
        <Mhcontent1 />
        <Link />
        <Mhcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/mh/MH.css'
import Top from '@/components/company/common/Top.vue'
import Mhcontent1 from '@/components/company/mh/Mh_content1.vue'
import Mhcontent2 from '@/components/company/mh/Mh_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>