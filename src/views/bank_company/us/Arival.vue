<template>
    <div class="arival_box">
        <Top />
        <Arival_content1 />
        <Link />
        <Arival_content2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import Link from '@/components/bank_company/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'

import Arival_content1 from '@/components/bank_company/us/arival/Arival_content1.vue'
import Arival_content2 from '@/components/bank_company/us/arival/Arival_content2.vue'

import '@/css/bank_company/us/arival/Arival.css'
</script>
