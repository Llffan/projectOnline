<template>
    <!-- tax planning services -->
    <div class="tax_planning_box">
        <Top />
        <TaxPlanningContent1 />
        <Link />
        <TaxPlanningContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/tax_planning/Tax_planning.css'
import Top from '@/components_en/common/Top.vue'
import TaxPlanningContent1 from '@/components_en/secretary/tax_planning/Tax_planning_content1.vue'
import TaxPlanningContent2 from '@/components_en/secretary/tax_planning/Tax_planning_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
