<template>
    <!-- ODI境外投资备案 -->
    <div class="odi_box">
        <Top />
        <HkOdiContent1 />
        <Link />
        <HkOdiContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/hk_odi/Hk_odi.css'
import Top from '@/components/common/Top.vue'
import HkOdiContent1 from '@/components/secretary/hk_odi/HkOdi_content1.vue'
import HkOdiContent2 from '@/components/secretary/hk_odi/HkOdi_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>