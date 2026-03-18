<template>
    <div class="maintenance_guide">
        <div class="content_box1">
            <div class="title">
                Overseas Account Maintenance Guide
            </div>
            <div class="intro">
                <div class="materials-grid">
                    <div class="material-card" v-for="(item, index) in maintenanceItems" :key="index">
                        <div class="card-idx">{{ index + 1 }}</div>
                        <div class="card-title">{{ item.title }}</div>
                        <div class="card-desc">
                            <p v-for="(point, pIndex) in item.points" :key="pIndex">
                                {{ point }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/css_en/bank_company/common/MaintenanceGuide.css'

const maintenanceItems = ref([
    {
        title: "Keep the Account Active",
        iconId: "#icon-finance",
        points: [
            "Activate promptly and make an initial deposit",
            "Log in to online banking 1-2 times a month, make 3-5 transactions within the latest 3 months",
            "Maintain sufficient funds to meet the daily average balance requirement",
            "Avoid keeping the account dormant for a long time without business transactions"
        ]
    },
    {
        title: "Respond to Bank Messages Promptly",
        iconId: "#icon-notes",
        points: [
            "Ensure the contact information provided to the bank is accurate and valid",
            "If you receive documents or messages from the bank, reply promptly and cooperate with investigations"
        ]
    },
    {
        title: "Ensure Transaction Security",
        iconId: "#icon-folder-success-one",
        points: [
            "Avoid transactions with sensitive or high-risk regions (e.g., sanctioned countries)",
            "Use corporate remittances where possible and minimize personal transactions",
            "Avoid unreasonable large amounts of funds moving in and out of the account"
        ]
    },
    {
        title: "Compliant Operations & Maintenance",
        iconId: "#icon-audit",
        points: [
            "Operate the overseas company compliantly, including regular bookkeeping and tax filing",
            "Properly keep related business documents and accounting books for irregular bank inspections"
        ]
    }
])
</script>
