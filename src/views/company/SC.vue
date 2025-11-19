<template>
    <div class="sc_box">
        <Top />
        <Sccontent1 />
        <Link />
        <Sccontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/sc/SC.css'
import Top from '@/components/company/common/Top.vue'
import Sccontent1 from '@/components/company/sc/Sc_content1.vue'
import Sccontent2 from '@/components/company/sc/Sc_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>