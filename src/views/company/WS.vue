<template>
    <!-- 萨摩亚公司 -->
    <div class="ws_box">
        <Top />
        <Wscontent1 />
        <Link />
        <Wscontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/ws/WS.css'
import Top from '@/components/company/common/Top.vue'
import Wscontent1 from '@/components/company/ws/Ws_content1.vue'
import Wscontent2 from '@/components/company/ws/Ws_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>