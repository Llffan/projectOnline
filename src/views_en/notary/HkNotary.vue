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
import '@/css_en/notary/hk/HkNotary.css'
import Top from '@/components_en/common/Top.vue'
import HkNotaryContent1 from '@/components_en/notary/hk/HkNotaryContent1.vue'
import HkNotaryContent2 from '@/components_en/notary/hk/HkNotaryContent2.vue'
import Link from '@/components_en/notary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
