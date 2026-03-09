<template>
    <!-- 公司注销服务 -->
    <div class="dissolution_box">
        <Top />
        <DissolutionContent1 />
        <Link />
        <DissolutionContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/dissolution/Dissolution.css'
import Top from '@/components/common/Top.vue'
import DissolutionContent1 from '@/components/secretary/dissolution/Dissolution_content1.vue'
import DissolutionContent2 from '@/components/secretary/dissolution/Dissolution_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
