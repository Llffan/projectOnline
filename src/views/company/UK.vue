<template>
    <!-- 英国公司 -->
    <div class="uk_box">
        <Top />
        <Ukcontent1 />
        <Link />
        <Ukcontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/uk/UK.css'
import Top from '@/components/common/Top.vue'
import Ukcontent1 from '@/components/company/uk/Uk_content1.vue'
import Ukcontent2 from '@/components/company/uk/Uk_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>