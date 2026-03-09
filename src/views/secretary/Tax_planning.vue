<template>
    <!-- 税务规划服务 -->
    <div class="tax_planning_box">
        <Top />
        <TaxPlanningContent1 />
        <Link />
        <TaxPlanningContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/tax_planning/Tax_planning.css'
import Top from '@/components/common/Top.vue'
import TaxPlanningContent1 from '@/components/secretary/tax_planning/Tax_planning_content1.vue'
import TaxPlanningContent2 from '@/components/secretary/tax_planning/Tax_planning_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
