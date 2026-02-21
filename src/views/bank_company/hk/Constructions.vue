<template>
    <div class="constructions_box">
        <Top />
        <ConstructionsContent1 />
        <Link />
        <ConstructionsContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/bank_company/hk/construction/Constructions.css'
import Top from '@/components/common/Top.vue'
import ConstructionsContent1 from '@/components/bank_company/hk/construction/Constructions_content1.vue'
import ConstructionsContent2 from '@/components/bank_company/hk/construction/Constructions_content2.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
