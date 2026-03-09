<template>
    <div class="boa_box">
        <Top />
        <BoaContent1 />
        <Link />
        <BoaContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import BoaContent1 from '@/components/bank_company/us/boa/Boa_content1.vue'
import BoaContent2 from '@/components/bank_company/us/boa/Boa_content2.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/bank_company/us/boa/Boa.css'
</script>
