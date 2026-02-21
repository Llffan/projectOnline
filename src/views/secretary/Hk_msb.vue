<template>
    <!-- 香港MSO牌照 -->
    <div class="msb_box">
        <Top />
        <HkMsbContent1 />
        <Link />
        <HkMsbContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/hk_msb/Hk_msb.css'
import Top from '@/components/common/Top.vue'
import HkMsbContent1 from '@/components/secretary/hk_msb/HkMsb_content1.vue'
import HkMsbContent2 from '@/components/secretary/hk_msb/HkMsb_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>