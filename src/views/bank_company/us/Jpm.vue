<template>
    <div class="jpm_box">
        <Top />
        <JpmContent1 />
        <Link />
        <JpmContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import JpmContent1 from '@/components/bank_company/us/jpm/Jpm_content1.vue'
import JpmContent2 from '@/components/bank_company/us/jpm/Jpm_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/us/jpm/Jpm.css'
</script>
