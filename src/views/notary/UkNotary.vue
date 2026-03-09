<template>
    <div class="uk_notary_box">
        <Top />
        <UkNotaryContent1 />
        <Link />
        <UkNotaryContent2 />
        <Bottom1 />
    </div>
</template>

<script setup>
import Top from '@/components/common/Top.vue'
import UkNotaryContent1 from '@/components/notary/uk/UkNotaryContent1.vue'
import UkNotaryContent2 from '@/components/notary/uk/UkNotaryContent2.vue'
import Link from '@/components/notary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>

<style scoped>
.uk_notary_box {
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
