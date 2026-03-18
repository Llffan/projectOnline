<template>
    <div class="embassy_notary">
        <Top />
        <EmbassyNotaryContent1 />
        <Link />
        <EmbassyNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import EmbassyNotaryContent1 from '@/components/notary/embassy/EmbassyNotary_content1.vue'
import EmbassyNotaryContent2 from '@/components/notary/embassy/EmbassyNotary_content2.vue'
import Link from '@/components/notary/common/Link.vue'
import Top from '@/components/common/Top.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
import '@/css/notary/embassy/EmbassyNotary.css'
</script>

<style scoped>
.embassy_notary {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
