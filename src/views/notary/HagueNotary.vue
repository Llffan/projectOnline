<template>
    <div class="hague_notary_box">
        <Top />
        <HagueNotaryContent1 />
        <Link />
        <HagueNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/notary/hague/HagueNotary.css'
import Top from '@/components/common/Top.vue'
import HagueNotaryContent1 from '@/components/notary/hague/HagueNotary_content1.vue'
import HagueNotaryContent2 from '@/components/notary/hague/HagueNotary_content2.vue'
import Link from '@/components/notary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
