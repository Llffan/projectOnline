<template>
    <!-- 公司变更服务 -->
    <div class="change_box">
        <Top />
        <ChangeContent1 />
        <Link />
        <ChangeContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/change/Change.css'
import Top from '@/components/common/Top.vue'
import ChangeContent1 from '@/components/secretary/change/Change_content1.vue'
import ChangeContent2 from '@/components/secretary/change/Change_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
