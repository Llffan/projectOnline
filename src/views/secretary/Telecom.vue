<template>
    <!-- 香港电讯牌照 -->
    <div class="telecom_box">
        <Top />
        <TelecomContent1 />
        <Link />
        <TelecomContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/telecom/Telecom.css'
import Top from '@/components/common/Top.vue'
import TelecomContent1 from '@/components/secretary/telecom/Telecom_content1.vue'
import TelecomContent2 from '@/components/secretary/telecom/Telecom_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>