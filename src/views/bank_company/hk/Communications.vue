<template>
    <div class="communications_box">
        <Top />
        <CommunicationsContent1 />
        <Link />
        <CommunicationsContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/bank_company/hk/communications/Communications.css'
import Top from '@/components/common/Top.vue'
import CommunicationsContent1 from '@/components/bank_company/hk/communications/Communications_content1.vue'
import CommunicationsContent2 from '@/components/bank_company/hk/communications/Communications_content2.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
