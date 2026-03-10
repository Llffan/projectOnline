<template>
    <!-- Company change service -->
    <div class="change_box">
        <Top />
        <ChangeContent1 />
        <Link />
        <ChangeContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/change/Change.css'
import Top from '@/components_en/common/Top.vue'
import ChangeContent1 from '@/components_en/secretary/change/Change_content1.vue'
import ChangeContent2 from '@/components_en/secretary/change/Change_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
