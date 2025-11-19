<template>
    <div class="my_box">
        <Top />
        <Mycontent1 />
        <Link />
        <Mycontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/company/my/MY.css'
import Top from '@/components_en/company/common/Top.vue'
import Mycontent1 from '@/components_en/company/my/My_content1.vue'
import Mycontent2 from '@/components_en/company/my/My_content2.vue'
import Link from '@/components_en/company/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>