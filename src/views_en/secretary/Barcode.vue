<template>
    <!-- Global barcode registration -->
    <div class="barcode_box">
        <Top />
        <BarcodeContent1 />
        <Link />
        <BarcodeContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css_en/secretary/barcode/Barcode.css'
import Top from '@/components_en/common/Top.vue'
import BarcodeContent1 from '@/components_en/secretary/barcode/Barcode_content1.vue'
import BarcodeContent2 from '@/components_en/secretary/barcode/Barcode_content2.vue'
import Link from '@/components_en/secretary/common/Link.vue'
import Bottom1 from '@/components_en/homeView/bottom/Bottom1.vue'
</script>
