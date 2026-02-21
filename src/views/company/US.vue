<template>
    <!-- 美国公司 -->
    <div class="us_box">
        <Top />
        <Uscontent1 />
        <Link />
        <Uscontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/us/US.css'
import Top from '@/components/common/Top.vue'
import Uscontent1 from '@/components/company/us/Us_content1.vue'
import Uscontent2 from '@/components/company/us/Us_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>