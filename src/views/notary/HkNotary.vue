<template>
    <div class="hk_notary_box">
        <Top />
        <HkNotaryContent1 />
        <Link />
        <HkNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/notary/hk/HkNotary.css'
import Top from '@/components/common/Top.vue'
import HkNotaryContent1 from '@/components/notary/hk/HkNotaryContent1.vue'
import HkNotaryContent2 from '@/components/notary/hk/HkNotaryContent2.vue'
import Link from '@/components/notary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
