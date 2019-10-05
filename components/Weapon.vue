<template>
  <v-container>
    <v-row>
      <h1>武器</h1>
    </v-row>
    <v-row>
      <bow></bow>
    </v-row>
    <customs></customs>
    <v-row>
      <parts-custom v-model="parts"></parts-custom>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="攻撃力"
          :value="calcuratedWeapon.attack"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="武器倍率"
          :value="rawAttack"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="会心率"
          :value="calcuratedWeapon.affinity"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="属性値"
          :value="calcuratedWeapon.element"
          readonly
          reverse
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bow from '@/components/Bow'
import Customs from '@/components/Customs'
import PartsCustom from '@/components/PartsCustom'

export default {
  components: {
    Bow,
    Customs,
    PartsCustom
  },
  data() {
    return {
      parts: { attack: 0, affinity: 0, element: 0 }
    }
  },
  computed: {
    ...mapState(['bow', 'custom']),
    ...mapGetters(['calcuratedWeapon']),
    rawAttack() {
      return this.calcuratedWeapon.attack
        ? this.calcuratedWeapon.attack / 1.2
        : null
    }
  }
}
</script>
