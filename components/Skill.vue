<template>
  <v-container>
    <v-row>
      <h1>スキル</h1>
    </v-row>
    <v-row>
      <v-col cols="4" md="2">
        <v-select
          v-model="attackBoost"
          :items="skills.attackBoost"
          :item-text="displaySkill"
          label="攻撃"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="criticalEye"
          :items="skills.criticalEye"
          :item-text="displaySkill"
          label="見切り"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="weaknessExploit"
          :items="skills.weaknessExploit"
          :item-text="displaySkill"
          label="弱点特効"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="criticalBoost"
          :items="skills.criticalBoost"
          :item-text="displaySkill"
          label="超会心"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="agitator"
          :items="skills.agitator"
          :item-text="displaySkill"
          label="挑戦者"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="peakPerformance"
          :items="skills.peakPerformance"
          :item-text="displaySkill"
          label="フルチャージ"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="latentPower"
          :items="skills.latentPower"
          :item-text="displaySkill"
          label="力の解放"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="fortify"
          :items="skills.fortify"
          :item-text="displaySkill"
          label="不屈"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="elementAttack"
          :items="skills.elementAttack"
          :item-text="displaySkill"
          label="属性強化"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="freeElem"
          :items="skills.freeElem"
          :item-text="displaySkill"
          label="属性解放"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="criticalElement"
          :items="skills.criticalElement"
          :item-text="displaySkill"
          label="会心撃【属性】"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          v-model="elementBoost"
          :items="skills.elementBoost"
          :item-text="displaySkill"
          label="属性加速"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn @click="reset">リセット</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import skills from '@/constants/skill'

export default {
  data() {
    return {
      skills
    }
  },
  computed: {
    attackBoost: {
      get() {
        return this.$store.state.skill.attackBoost
      },
      set(value) {
        this.setSkill({ attackBoost: value })
      }
    },
    criticalEye: {
      get() {
        return this.$store.state.skill.criticalEye
      },
      set(value) {
        this.setSkill({ criticalEye: value })
      }
    },
    weaknessExploit: {
      get() {
        return this.$store.state.skill.weaknessExploit
      },
      set(value) {
        this.setSkill({ weaknessExploit: value })
      }
    },
    criticalBoost: {
      get() {
        return this.$store.state.skill.criticalBoost
      },
      set(value) {
        this.setSkill({ criticalBoost: value })
      }
    },
    agitator: {
      get() {
        return this.$store.state.skill.agitator
      },
      set(value) {
        this.setSkill({ agitator: value })
      }
    },
    peakPerformance: {
      get() {
        return this.$store.state.skill.peakPerformance
      },
      set(value) {
        this.setSkill({ peakPerformance: value })
      }
    },
    latentPower: {
      get() {
        return this.$store.state.skill.latentPower
      },
      set(value) {
        this.setSkill({ latentPower: value })
      }
    },
    fortify: {
      get() {
        return this.$store.state.skill.fortify
      },
      set(value) {
        this.setSkill({ fortify: value })
      }
    },
    elementAttack: {
      get() {
        return this.$store.state.skill.elementAttack
      },
      set(value) {
        this.setSkill({ elementAttack: value })
      }
    },
    freeElem: {
      get() {
        return this.$store.state.skill.freeElem
      },
      set(value) {
        this.setSkill({ freeElem: value })
      }
    },
    criticalElement: {
      get() {
        return this.$store.state.skill.criticalElement
      },
      set(value) {
        this.setSkill({ criticalElement: value })
      }
    },
    elementBoost: {
      get() {
        return this.$store.state.skill.elementBoost
      },
      set(value) {
        this.setSkill({ elementBoost: value })
      }
    }
  },
  methods: {
    displaySkill(item) {
      return `${item.name}: ${item.description}`
    },
    reset() {
      this.attackBoost = null
      this.criticalEye = null
      this.weaknessExploit = null
      this.criticalBoost = null
      this.agitator = null
      this.peakPerformance = null
      this.latentPower = null
      this.fortify = null
      this.elementAttack = null
      this.freeElem = null
      this.criticalElement = null
      this.elementBoost = null
    },
    ...mapActions(['setSkill'])
  }
}
</script>
