<template>
    <div class="tax_planning_content2">
        <div class="content_wrapper">
            <!-- 左侧文本区域 -->
            <div class="left-section">
                <div class="section-title">
                    我们的会计与税务咨询解决方案
                </div>
                <div class="section-text">
                    <p>承接大型复杂项目并非易事。无论您是要进军新市场，还是转变运营和架构，我们都能针对您的战略活动为您提供会计与税务指导，为您降低流程中的复杂性。</p>
                    <p>我们的团队专家拥有丰富的本地知识和实践经验，深谙本地及国际法规，可为您提供所需的支持，并制定切实可行的解决方案，助您驾驭复杂挑战。</p>
                </div>
            </div>

            <!-- 右侧表单区域 -->
            <div class="right-section">
                <div class="form-card">
                    <div class="form-title">免费咨询企业解决方案</div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="请输入您的名字（必填）" />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="请输入您的姓氏（必填）" />
                    </div>
                    
                    <div class="form-group">
                        <input type="tel" placeholder="请输入手机号（必填）" />
                    </div>
                    
                    <button class="submit-btn" @click="handleSubmit">立即提交</button>
                </div>
            </div>
        </div>
        
        <!-- 底部协议说明 -->
        <div class="bottom-info">
            <div class="notice-text">
                本网站仅接受直接客户咨询，谢绝各类中介合作洽谈，感谢理解。
            </div>
            <div class="links-row">
                <span>*此表单不接收求职申请</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css/secretary/tax_planning/Tax_planning_content2.css'

gsap.registerPlugin(ScrollTrigger)

const handleSubmit = () => {
    alert("提交成功！我们的专家将尽快与您联系。")
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
