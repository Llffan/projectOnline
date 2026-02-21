<template>
    <!-- 马来西亚公司 -->
    <div class="my_box">
        <Top />
        <Mycontent1 />
        <Link />
        <Mycontent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/company/my/MY.css'
import Top from '@/components/common/Top.vue'
import Mycontent1 from '@/components/company/my/My_content1.vue'
import Mycontent2 from '@/components/company/my/My_content2.vue'
import Link from '@/components/company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>