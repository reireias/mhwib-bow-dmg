<template>
  <v-container>
    <v-row>
      <h1>武器</h1>
    </v-row>
    <v-row>
      <bow v-model="bow"></bow>
    </v-row>
    <customs :bow="bow"></customs>
    <v-row>
      <parts-custom :bow="bow"></parts-custom>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="攻撃力"
          :value="attack"
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
          :value="affinity"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="属性値"
          :value="element"
          readonly
          reverse
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
      bow: null
    }
  },
  computed: {
    attack() {
      return this.bow ? this.bow.attack : null
    },
    rawAttack() {
      return this.bow ? this.bow.attack / 1.2 : null
    },
    affinity() {
      return this.bow ? this.bow.affinity : null
    },
    element() {
      return this.bow ? this.bow.element.value : null
    }
  }
}
</script>
