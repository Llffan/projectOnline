<template>
    <div class="notary_box">
        <Top />
        <NotaryContent1 />
        <Link />
        <NotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/notary/Notary.css'
import Top from '@/components/common/Top.vue'
import NotaryContent1 from '@/components/notary/Notary_content1.vue'
import NotaryContent2 from '@/components/notary/Notary_content2.vue'
import Link from '@/components/notary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
