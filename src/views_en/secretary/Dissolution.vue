<template>
    <!-- Company cancellation service -->
    <div class="dissolution_box">
        <Top />
        <DissolutionContent1 />
        <Link />
        <DissolutionContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/dissolution/Dissolution.css'
import Top from '@/components_en/common/Top.vue'
import DissolutionContent1 from '@/components_en/secretary/dissolution/Dissolution_content1.vue'
import DissolutionContent2 from '@/components_en/secretary/dissolution/Dissolution_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
