<template>
    <div class="domestic_trademark_content2">
        <div class="content_wrapper">
            <!-- Left Text Section -->
            <div class="left-section">
                <div class="section-title">
                    Our Domestic Trademark Solutions
                </div>
                <div class="section-text">
                    <p>In today's competitive market, protecting brand assets is crucial. Whether you are a startup or a fast-growing enterprise, we provide professional trademark guidance tailored to your business strategy to mitigate operational risks.</p>
                    <p>Our team has deep domestic legal backgrounds and extensive practical experience with trademark examination rules. we can develop feasible brand protection plans to help you navigate complex challenges in both global expansion and domestic layout.</p>
                </div>
            </div>

            <!-- Right Form Section -->
            <div class="right-section">
                <div class="form-card">
                    <div class="form-title">Free Solution Consultation</div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="First Name (Required)" />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="Last Name (Required)" />
                    </div>
                    
                    <div class="form-group">
                        <input type="tel" placeholder="Phone Number (Required)" />
                    </div>
                    
                    <button class="submit-btn" @click="handleSubmit">Book Expert Consultation</button>
                </div>
            </div>
        </div>
        
        <!-- Bottom Info -->
        <div class="bottom-info">
            <div class="notice-text">
                This website only accepts direct client inquiries and does not accept intermediary or agency cooperation. Thank you for your understanding.
            </div>
            <div class="links-row">
                <span>*This form is followed up by professional trademark legal consultants.</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/ip/domestic/DomesticTrademark_content2.css'
import ChooseUs from '@/components_en/ip/common/ChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const handleSubmit = () => {
    alert("Appointment successful! Our trademark consultant will contact you shortly.")
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

    // Ensure all components and images are loaded before calculating scroll positions
    setTimeout(() => {
        ScrollTrigger.refresh()
    }, 1000)
})
</script>
