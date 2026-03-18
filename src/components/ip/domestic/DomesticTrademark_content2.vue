<template>
    <div class="domestic_trademark_content2">
        <div class="content_wrapper">
            <!-- 左侧文本区域 -->
            <div class="left-section">
                <div class="section-title">
                    我们的国内商标咨询解决方案
                </div>
                <div class="section-text">
                    <p>在当今激烈的市场竞争中，保护品牌资产至关重要。无论您是初创公司还是处于快速发展期的企业，我们都能针对您的业务战略提供专业的商标指导，降低品牌运营风险。</p>
                    <p>我们的团队拥有深厚的国内法律背景与丰富的实务经验，深谙商标局的审查规则，可根据您的需求制定切实可行的品牌护航方案，助您驾驭品牌出海与国内布局中的复杂挑战。</p>
                </div>
            </div>

            <!-- 右侧表单区域 -->
            <div class="right-section">
                <div class="form-card">
                    <div class="form-title">免费咨询国内商标方案</div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="请输入您的名字（必填）" />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="请输入您的姓氏（必填）" />
                    </div>
                    
                    <div class="form-group">
                        <input type="tel" placeholder="请输入手机号（必填）" />
                    </div>
                    
                    <button class="submit-btn" @click="handleSubmit">立即预约专家</button>
                </div>
            </div>
        </div>
        
        <!-- 底部协议说明 -->
        <div class="bottom-info">
            <div class="notice-text">
                本网站仅接受直接客户咨询，谢绝各类中介合作洽谈，感谢理解。
            </div>
            <div class="links-row">
                <span>*此表单由专业商标法律顾问跟进处理</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/ip/domestic/DomesticTrademark_content2.css'
import ChooseUs from '@/components/ip/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const handleSubmit = () => {
    alert("预约成功！我们的商标顾问将尽快与您联系。")
}

onMounted(async () => {
    await nextTick()
    
    gsap.from(".left-section", {
        autoAlpha: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ".content_wrapper",
            start: 'top 80%',
            once: true
        }
    })

    gsap.from(".right-section", {
        autoAlpha: 0,
        x: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ".content_wrapper",
            start: 'top 80%',
            once: true
        }
    })
    
    gsap.from(".bottom-info", {
        autoAlpha: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ".content_wrapper",
            start: 'top 80%',
            once: true
        }
    })
})
</script>
