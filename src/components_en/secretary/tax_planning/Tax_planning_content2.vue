<template>
    <div class="tax_planning_content2">
        <div class="content_wrapper">
            <!-- left text area -->
            <div class="left-section">
                <div class="section-title">
                    Our accounting and tax consulting solutions
                </div>
                <div class="section-text">
                    <p>Taking on large and complex projects is no easy task. Whether you are entering new markets or transforming operations and structures, we can provide you with accounting and tax guidance tailored to your strategic activities, reducing complexity in the process.</p>
                    <p>Our team of experts has extensive local knowledge and practical experience, as well as local and international regulations, to provide you with the support you need and develop practical solutions to help you navigate complex challenges.</p>
                </div>
            </div>

            <!-- Right form area -->
            <div class="right-section">
                <div class="form-card">
                    <div class="form-title">Free consultation on enterprise solutions</div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="Please enter your name (required)" />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" placeholder="Please enter your last name (required)" />
                    </div>
                    
                    <div class="form-group">
                        <input type="tel" placeholder="Please enter your mobile phone number (required)" />
                    </div>
                    
                    <button class="submit-btn" @click="handleSubmit">Submit now</button>
                </div>
            </div>
        </div>
        
        <!-- Bottom protocol description -->
        <div class="bottom-info">
            <div class="notice-text">
                This website only accepts direct customer inquiries and declines cooperation negotiations with various intermediaries. Thank you for your understanding.
            </div>
            <div class="links-row">
                <span>*This form does not accept job applications</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '@/css_en/secretary/tax_planning/Tax_planning_content2.css'

gsap.registerPlugin(ScrollTrigger)

const handleSubmit = () => {
    alert("Submission successful! Our experts will contact you as soon as possible.")
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
