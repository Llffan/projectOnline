<template>
    <div class="hague_notary_box">
        <Top />
        <HagueNotary_content1 />
        <Link />
        <HagueNotary_content2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/notary/hague/HagueNotary.css'
import Top from '@/components_en/common/Top.vue'
import HagueNotary_content1 from '@/components_en/notary/hague/HagueNotary_content1.vue'
import HagueNotary_content2 from '@/components_en/notary/hague/HagueNotary_content2.vue'
import Link from '@/components_en/notary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
