<template>
    <div class="jp_notary_box">
        <Top />
        <JpNotaryContent1 />
        <Link />
        <JpNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>

import Top from '@/components_en/common/Top.vue'
import JpNotaryContent1 from '@/components_en/notary/jp/JpNotaryContent1.vue'
import JpNotaryContent2 from '@/components_en/notary/jp/JpNotaryContent2.vue'
import Link from '@/components_en/notary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.jp_notary_box {
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
    background: #fff;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>
