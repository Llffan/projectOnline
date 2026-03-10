<template>
    <!-- Company resumes services -->
    <div class="restoration_box">
        <Top />
        <RestorationContent1 />
        <Link />
        <RestorationContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/restoration/Restoration.css'
import Top from '@/components_en/common/Top.vue'
import RestorationContent1 from '@/components_en/secretary/restoration/Restoration_content1.vue'
import RestorationContent2 from '@/components_en/secretary/restoration/Restoration_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
