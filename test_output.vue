<template>
    <div class="kr_content2">
        <div class="content_box">
            <div class="content1">
                <div class="title">Korean company registration</div>
                <div class="intro">
                    <img src="@/assets/img/company/kr/KR-2.jpg" alt="">
                    <div class="text">
                        <P>South Korea is located in the southern part of the Korean Peninsula in East Asia. It is a developed capitalist country with developed information technology and manufacturing industry. Its shipbuilding, automobile, electronics and other industries rank among the best in the world.</P>
                        <P>South Korea has world-renowned high-speed Internet services, an excellent business environment and a developed market economy, making it an ideal place for investors to do business.</P>
                        <P>Based on the diversified incentive mechanisms developed by the Korean government and the high-yield characteristics of the Asia-Pacific region, many multinational companies have been attracted to invest here.</P>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="title">Advantages of Korean company registration</div>
                <div class="intro">
                    <div v-for="(item, index) in advantage" :key="index" class="advantage" :ref="el => { if (el) advantageRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text">
                            {{ item.adv }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content3">
                <div class="title">Conditions and required information</div>
                <div class="intro">
                    <div class="left">
                        <div class="condition-item">Number of people required: minimum 2 people (shareholders/representative directors/supervisors need to be determined based on share capital and structure)</div>
                        <div class="condition-item">Registered capital: The default is 100 million won, which must be paid in one time to verify the capital is in place.</div>
                        <div class="condition-item">Registered address: It needs to be a local registered address in South Korea (our company can provide it).</div>
                        <div class="condition-item">Business scope: Few restrictions, general normal business can be operated.</div>
                    </div>
                    <div class="center"></div>
                    <div class="right">
                        <div class="condition-item">Company name: Named in Korean, and the license shows Korean (English name is available).</div>
                        <div class="condition-item">Proof of identity: Provide identification documents (ID cards and passports) representing directors and supervisors.</div>
                        <div class="condition-item">Notarized documents: Representative directors and supervisors must obtain original notarized documents in the country.</div>
                        <div class="condition-item">Capital injection: Registration funds must be remitted from outside South Korea to be recognized as foreign investment.</div>
                    </div>
                </div>
            </div>
            <div class="content4">
                <div class="title">Company registration process</div>
                <div class="intro">
                    <div v-for="(item, index) in registrationProcess" :key="index" class="advantage" :ref="el => { if (el) registrationProcessRefs[index] = el }">
                        <div class="img">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.iconId"></use> 
                            </svg>
                        </div>
                        <div class="text1">
                            {{ item.title }}
                        </div>
                        <div class="text2">
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content5">
                <div class="title">Our advantages</div>
                <div class="intro">
                    <div v-for="(item, index) in advantages" :key="index" class="advantage">
                        <div class="img">
                            <img :src="item.imgSrc" :alt="item.title">
                        </div>
                        <div class="text1">
                            {{ item.title }}
                        </div>
                        <div class="text2">
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content6">
                <div class="title">Frequently Asked Questions about Registering a Korean Company</div>
                <div class="intro">
                    <div 
                        v-for="(faq, index) in faqs" 
                        :key="index" 
                        class="faq-item"
                        @click="toggleFaq(index)"
                    >
                        <div class="faq-question">
                            <span class="question-text">{{ faq.question }}</span>
                            <span class="toggle-icon" :class="{ 'expanded': expandedItems[index] }">
                                ▼
                            </span>
                        </div>
                        <div 
                            class="faq-answer" 
                            :class="{ 'expanded': expandedItems[index] }"
                        >
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>import { ref, onMounted, nextTick } from 'vue' import gsap from 'gsap' import ScrollTrigger from 'gsap/ScrollTrigger' // Keep the import path unchanged import '@/css_en/company/kr/Kr_content2.css' gsap.registerPlugin(ScrollTrigger) const registrationProcess = [ { iconId: '#icon-message-search', title: 'Submit name and evaluation', description: 'Verify the name, determine the company name, business scope, representative directors and supervisors. ' }, { iconId: '#icon-agreement', title: 'Signing the Agreement and Delivering the Payment', description: 'Sign the entrustment agreement, pay the deposit, and prepare notarized documents. ' }, { iconId: '#icon-audit', title: 'Processing notarized documents', description: 'After notarization in China on behalf of directors and supervisors, the original notarization will be mailed to our company. ' }, { iconId: '#icon-bank-transfer', title: 'Declaration of foreign investment and capital injection', description: 'Processing foreign investment declaration, customers remit registered capital from abroad to a bank custody account (advance service can be provided). ' }, { iconId: '#icon-government-line', title: 'Submit application and complete registration', description: 'After the funds arrive, our company will go through the registration procedures, which will take about 7-9 working days. ' }, { iconId: '#icon-file-success', title: 'Receive license and subsequent account opening', description: 'The client goes to South Korea to obtain a business license, and our company assists the client in opening a bank account. ' } ] const advantage = [ { iconId: '#icon-degree-hat', adv: 'Excellent human resources: more than 97% of professionals have university degrees or received vocational training. ' }, { iconId: '#icon-effects', adv: 'IT power: It has the highest broadband network access rate and mobile phone penetration rate in the world. ' }, { iconId: '#icon-award-line', adv: 'High government incentive mechanism: the most lenient among the OECD member countries. ' }, { iconId: '#icon-earth', adv: 'Best location: Flights from major cities in Northeast Asia (Beijing, Tokyo, Shanghai) are within 3 hours. ' }, { iconId: '#icon-positive-dynamics', adv: 'High-yield center: The net profits of foreign-funded enterprises are much higher than those of domestic enterprises.' }, { iconId: '#icon-transaction', adv: 'Trade convenience: the company has import and export rights after registration, no additional application is required. ' } ] const advantages = [ { imgSrc: new URL('@/assets/img/temp_img/1.jpg', import.meta.url).href, title: 'Professional Team', description: 'Have an experienced professional consultant team to provide one-stop service solutions' }, { imgSrc: new URL('@/assets/img/temp_img/3.jpg', import.meta.url).href, title: 'Efficient handling', description: 'Process optimization, quick response, greatly shortening the processing time' }, { imgSrc: new URL('@/assets/img/temp_img/4.jpg', import.meta.url).href, title: 'Price Transparency', description: 'Clearly priced, no hidden charges, providing cost-effective services' }, { imgSrc: new URL('@/assets/img/temp_img/5.jpg', import.meta.url).href, title: 'Full service', description: 'Provide full-cycle considerate service support from consultation to follow-up maintenance'} ] const faqs = ref([ { question: "What documents will you get after completing the application process for a Korean company?", answer: "1. Business license; 2. Transcript of legal person registration book; 3. Seal certificate; 4. Official seal of legal person; 5. Articles of association, shareholder list; 6. Company card." }, { question: "What are the requirements for registered capital for Korean companies?", answer: "The minimum registered capital is 100 million converted Korean won, which is approximately RMB 600,000. This fee needs to be remitted to South Korea from abroad. It is into Korean won according to the exchange rate of the day when registering, and the actual capital must be paid to verify that it is in place." }, { question: "Can Korean companies operate on-site?", answer: "Yes. Our company can provide registration of Korean foreign operating companies and Korean entity operating companies." } ]) const expandedItems = ref({}) const toggleFaq = (index) => { expandedItems.value[index] = !expandedItems.value[index] } const advantageRefs = ref([]) const registrationProcessRefs = ref([]) // Keep the animation script unchanged onMounted(async () => { await nextTick() // content1 animation gsap.from('.content1 .title', { scrollTrigger: { trigger: '.content1 .title', start: 'top 90%' }, opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }) gsap.from('.content1 .intro', { scrollTrigger: { trigger: '.content1 .intro', start: 'top 80%' }, opacity: 0, y: 50, duration: 0.8, delay: 0.2, ease: 'power2.out' }) // content2 animation - refer to other pages to unify animation effects gsap.from('.content2 .title', { scrollTrigger: { trigger: '.content2 .title', start: 'top 80%' }, opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }) // Add animation to each advantage item - refer to other pages to unify animation effects advantageRefs.value.forEach((el, index) => { gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.content2 .intro', start: 'top 80%' } } ) }) // content3 animation gsap.from('.content3 .title', { scrollTrigger: { trigger: '.content3 .title', start: 'top 80%' }, opacity: 0, y: 50, duration: 0.8 }) const conditionItems = document.querySelectorAll('.content3 .condition-item'); conditionItems.forEach((item, index) => { gsap.fromTo(item, { x: -50, opacity: 0, transition: 'none' }, { x: 0, opacity: 1, duration: 0.6, delay: index * 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.content3 .intro', start: 'top 80%' }, onComplete: function() { gsap.set(item, { clearProps: "x,opacity,transition" }) } } ); }); // content4 animation - Unify animation effects with reference to other pages gsap.from('.content4 .title', { scrollTrigger: { trigger: '.content4 .title', start: 'top 80%' }, opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }) // Add animation to each registration process item - refer to other pages to unify animation effects registrationProcessRefs.value.forEach((el, index) => { gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.content4 .intro', start: 'top 80%' } } ) }) // content5 animation gsap.from('.content5 .title', { scrollTrigger: { trigger: '.content5 .title', start: 'top 80%' }, opacity: 0, y: 50, duration: 0.8 }) const content5Advantages = document.querySelectorAll('.content5 .advantage'); content5Advantages.forEach((item, index) => { gsap.fromTo(item, { y: 50, opacity: 0, transition: 'none' }, { y: 0, opacity: 1, duration: 0.8, delay: index * 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.content5 .intro', start: 'top 80%' }, onComplete: function() { gsap.set(item, { clearProps: "y,opacity,transition" }) } } ); }) // content6 title animation gsap.fromTo('.content6 .title', { y: 50, opacity: 0, transition: 'none' }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.content6 .title', start: 'top 80%' }, onComplete: function() { gsap.set('.content6 .title', { clearProps: "y,opacity,transition" }) } } ); // content6 FAQ animation const faqItems = document.querySelectorAll('.content6 .faq-item'); faqItems.forEach((item, index) => { //FAQ item enters animation gsap.fromTo(item, { y: 30, opacity: 0, transition: 'none' }, { y: 0, opacity: 1, duration: 0.6, delay: index * 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.content6 .intro', start: 'top 85%' }, onComplete: function() { gsap.set(item, { clearProps: "y,opacity,transition" }) } } ); }); })</script>