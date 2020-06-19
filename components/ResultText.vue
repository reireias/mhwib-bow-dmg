<template>
  <div>
    <v-textarea :value="text" auto-grow></v-textarea>
    <center>
      <v-btn @click="copy">コピー</v-btn>
    </center>
    <v-snackbar v-model="copied">コピーしました</v-snackbar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { elementNameMap } from '@/constants/element'

export default {
  props: {
    result: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      copied: false,
    }
  },
  computed: {
    ...mapState([
      'bow',
      'custom',
      'parts',
      'buff',
      'skill',
      'motions',
      'monster',
      'target',
    ]),
    ...mapGetters(['condition']),
    text() {
      return `武器：${this.bow.name}
カスタム：${this.customText}${this.partsText}
バフ：${this.buffText}
スキル：${this.skillText}
モーション：${this.motions[0].name} [${this.motions[0].description}]
ターゲット：${this.targetText}

結果
通常時：${this.result.base}
会心時：${this.result.critical}
期待値：${this.result.expected}
合計：${this.result.total}`
    },
    customText() {
      const customs = []
      if (this.custom.attack) {
        customs.push(`攻撃${this.custom.attack.name}`)
      }
      if (this.custom.affinity) {
        customs.push(`会心${this.custom.affinity.name}`)
      }
      if (this.custom.element) {
        customs.push(`属性${this.custom.element.name}`)
      }
      return customs.length > 0 ? customs.join('、') : 'なし'
    },
    partsText() {
      if (this.parts) {
        return `\nパーツ：${this.parts.name.split(' ')[0]}`
      } else {
        return ''
      }
    },
    buffText() {
      const buffs = []
      if (this.buff.coating === 1.35) buffs.push('強撃ビン')
      if (this.buff.coating === 1.2) buffs.push('接撃ビン')
      if (this.buff.powerCharm) buffs.push('護符')
      if (this.buff.powerTalon) buffs.push('爪')
      if (this.buff.demonPowder) buffs.push('粉塵')
      if (this.buff.canteen === 5) buffs.push('食事小')
      if (this.buff.canteen === 10) buffs.push('食事中')
      if (this.buff.canteen === 15) buffs.push('食事大')
      if (this.buff.demonDrugs === 5) buffs.push('鬼人薬')
      if (this.buff.demonDrugs === 7) buffs.push('鬼人薬G')
      if (this.buff.seed === 10) buffs.push('種')
      if (this.buff.seed === 25) buffs.push('丸薬')
      return buffs.length > 0 ? buffs.join('、') : 'なし'
    },
    skillText() {
      const skills = []
      if (this.skill.attackBoost) skills.push(`攻撃${this.skill.attackBoost}`)
      if (this.skill.criticalEye) skills.push(`見切り${this.skill.criticalEye}`)
      if (this.skill.weaknessExploit)
        skills.push(`弱点特効${this.skill.weaknessExploit}`)
      if (this.skill.criticalBoost)
        skills.push(`超会心${this.skill.criticalBoost}`)
      if (this.skill.agitator) skills.push(`挑戦者${this.skill.agitator}`)
      if (this.skill.peakPerformance)
        skills.push(`フルチャージ${this.skill.peakPerformance}`)
      if (this.skill.latentPower)
        skills.push(`力の解放${this.skill.latentPower}`)
      if (this.skill.fortify) skills.push(`不屈${this.skill.fortify}乙`)
      if (this.skill.elementAttack)
        skills.push(`属性強化${this.skill.elementAttack}`)
      if (this.skill.freeElem) skills.push(`属性解放${this.skill.freeElem}`)
      if (this.skill.criticalElement === 1) skills.push(`会心撃【属性】`)
      if (this.skill.criticalElement === 2) skills.push(`真・会心撃【属性】`)
      if (this.skill.elementBoost === 1) skills.push(`属性加速`)
      if (this.skill.elementBoost === 2) skills.push(`真・属性加速`)
      return skills.length > 0 ? skills.join('、') : 'なし'
    },
    targetText() {
      const elem = this.bow.element.type
      const part = `弾${this.target.ammo}, ${elementNameMap[elem]}${this.target[elem]}`
      return `${this.monster.name} ${this.target.name} [${part}]`
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.text).then(() => {
        this.copied = true
      })
    },
  },
}
</script>
