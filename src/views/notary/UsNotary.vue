<template>
    <div class="us_notary_box">
        <Top />
        <UsNotaryContent1 />
        <Link />
        <UsNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import UsNotaryContent1 from '@/components/notary/us/UsNotaryContent1.vue'
import UsNotaryContent2 from '@/components/notary/us/UsNotaryContent2.vue'
import Link from '@/components/notary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.us_notary_box {
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
