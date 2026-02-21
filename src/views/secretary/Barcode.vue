<template>
    <!-- 全球条形码注册 -->
    <div class="barcode_box">
        <Top />
        <BarcodeContent1 />
        <Link />
        <BarcodeContent2 />
        
        <Bottom1 />
    </div>
</template>

<script setup>
import '@/css/secretary/barcode/Barcode.css'
import Top from '@/components/common/Top.vue'
import BarcodeContent1 from '@/components/secretary/barcode/Barcode_content1.vue'
import BarcodeContent2 from '@/components/secretary/barcode/Barcode_content2.vue'
import Link from '@/components/secretary/common/Link.vue'
import Bottom1 from '@/components/homeView/bottom/Bottom1.vue'
</script>
