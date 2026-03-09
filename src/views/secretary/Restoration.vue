<template>
    <!-- 公司恢复服务 -->
    <div class="restoration_box">
        <Top />
        <RestorationContent1 />
        <Link />
        <RestorationContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/restoration/Restoration.css'
import Top from '@/components/common/Top.vue'
import RestorationContent1 from '@/components/secretary/restoration/Restoration_content1.vue'
import RestorationContent2 from '@/components/secretary/restoration/Restoration_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
