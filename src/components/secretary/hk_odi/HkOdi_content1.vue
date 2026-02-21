<template>
    <div class="odi_content1">
        <div class="img_box">
            <img src="@/assets/img/company/hk/HK-2.jpg" alt="ODI备案">
        </div>
        <div class="intro">
            <div class="odi-title">ODI境外投资备案</div>
            <div class="odi-subtitle">企业境外投资证书 / (ODI) / 合规出海 / 商务部备案</div>
            <div class="odi-description">
                <p>- Overseas Direct Investment (ODI)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/css/secretary/hk_odi/HkOdi_content1.css'

// 过渡动画
onMounted(() => {
    const tl = gsap.timeline()
    
    // 初始状态设置
    gsap.set('.odi-title', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.odi-subtitle', { 
        opacity: 0, 
        y: 50 
    })
    
    gsap.set('.odi-description', { 
        opacity: 0, 
        y: 50 
    })
    
    // 添加动画序列
    tl.to('.odi-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    })
    .to('.odi-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
    .to('.odi-description', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.7')
})
</script>