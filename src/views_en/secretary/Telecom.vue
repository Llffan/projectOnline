<template>
    <!-- Hong Kong Telecommunications License -->
    <div class="telecom_box">
        <Top />
        <TelecomContent1 />
        <Link />
        <TelecomContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/telecom/Telecom.css'
import Top from '@/components_en/common/Top.vue'
import TelecomContent1 from '@/components_en/secretary/telecom/Telecom_content1.vue'
import TelecomContent2 from '@/components_en/secretary/telecom/Telecom_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>