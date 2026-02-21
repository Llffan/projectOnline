<template>
    <div class="maintenance_guide content3_1">
        <div class="title">
            境外账户维护指导
        </div>
        <div class="intro">
            <div v-for="(item, index) in maintenanceItems" :key="index" class="maintenance-item">
                <div class="icon_box">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.iconId"></use>
                    </svg>
                </div>
                <div class="text_box">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="item-desc">
                        <p v-for="(point, pIndex) in item.points" :key="pIndex">
                            {{ point }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/css/bank_company/common/MaintenanceGuide.css'

const maintenanceItems = ref([
    {
        title: "保持账户活跃",
        iconId: "#icon-finance",
        points: [
            "及时激活，并进行存款",
            "每月登陆1-2次网银，近三个月内进行3-5次交易",
            "保持账户资金满足各银行日均余额要求",
            "避免不使用账户或长时间不发生业务往来"
        ]
    },
    {
        title: "及时回复银行信息",
        iconId: "#icon-notes",
        points: [
            "确保预留给银行的通讯信息真实有效",
            "若收到银行发生的文件信息务必及时回复，配合调查"
        ]
    },
    {
        title: "确保交易安全性",
        iconId: "#icon-folder-success-one",
        points: [
            "避免与敏感、高危地区（如被制裁国家）进行交易",
            "尽量采取对公汇款，减少个人交易",
            "避免不合理的大笔资金进出账户"
        ]
    },
    {
        title: "合规运营依法维护",
        iconId: "#icon-audit",
        points: [
            "境外公司合规运营，正常做账报税",
            "妥善保管相关业务资料、账册，以备银行不定期抽查"
        ]
    }
])
</script>
