<template>
  <v-container>
    <v-row justify="center">
      <v-btn color="primary" @click="calcurate">計算</v-btn>
    </v-row>
    <v-row>
      {{ results }}
    </v-row>
  </v-container>
</template>

<script>
import { damage } from 'mhwdmg'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      results: null
    }
  },
  computed: {
    ...mapState(['bow', 'motions', 'target', 'anger', 'wounded']),
    ...mapGetters(['calcuratedWeapon', 'buff'])
  },
  methods: {
    calcurate() {
      // TODO: add validate
      const weapon = {
        attack: this.calcuratedWeapon.rawAttack,
        affinity: this.calcuratedWeapon.affinity,
        element: this.calcuratedWeapon.element,
        sharpness: 'ammo'
      }
      const targetParam = {
        physicalEffectiveness: this.wounder
          ? this.target.ammo + Math.floor((100 - this.target.ammo) * 0.25)
          : this.target.ammo,
        elementalEffectiveness: this.bow.element
          ? this.target[this.bow.element.type]
          : null,
        anger: this.anger
      }
      const buffParam = this.buff
      this.results = this.motions.map((motion) => {
        const motionParam = {
          value: motion.value,
          elementRate: motion.elementRate
        }
        const dmg = damage(weapon, targetParam, motionParam, buffParam)
        return {
          motionName: motion.name,
          damage: dmg,
          count: motion.count
        }
      })
    }
  }
}
</script>
