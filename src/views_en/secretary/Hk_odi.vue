<template>
    <!-- ODI overseas investment registration -->
    <div class="odi_box">
        <Top />
        <HkOdiContent1 />
        <Link />
        <HkOdiContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/hk_odi/Hk_odi.css'
import Top from '@/components_en/common/Top.vue'
import HkOdiContent1 from '@/components_en/secretary/hk_odi/HkOdi_content1.vue'
import HkOdiContent2 from '@/components_en/secretary/hk_odi/HkOdi_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>