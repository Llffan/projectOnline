<template>
    <div class="ws_box">
        <Top />
        <Wscontent1 />
        <Link />
        <Wscontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/company/ws/WS.css'
import Top from '@/components_en/company/common/Top.vue'
import Wscontent1 from '@/components_en/company/ws/Ws_content1.vue'
import Wscontent2 from '@/components_en/company/ws/Ws_content2.vue'
import Link from '@/components_en/company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>