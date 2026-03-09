<template>
    <div class="sg_notary_box">
        <Top />
        <SgNotaryContent1 />
        <Link />
        <SgNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import SgNotaryContent1 from '@/components/notary/sg/SgNotaryContent1.vue'
import SgNotaryContent2 from '@/components/notary/sg/SgNotaryContent2.vue'
import Link from '@/components/notary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.sg_notary_box {
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
