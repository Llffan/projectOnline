<template>
    <div class="shanghai_box">
        <Top />
        <ShanghaiContent1 />
        <Link />
        <ShanghaiContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import ShanghaiContent1 from '@/components/bank_company/hk/shanghai/Shanghai_content1.vue'
import ShanghaiContent2 from '@/components/bank_company/hk/shanghai/Shanghai_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/hk/shanghai/Shanghai.css'
</script>
