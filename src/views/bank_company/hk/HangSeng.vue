<template>
    <div class="hangseng_box">
        <Top />
        <HangSengContent1 />
        <Link />
        <HangSengContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import HangSengContent1 from '@/components/bank_company/hk/hangseng/HangSeng_content1.vue'
import HangSengContent2 from '@/components/bank_company/hk/hangseng/HangSeng_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/hangseng/HangSeng.css'
</script>
