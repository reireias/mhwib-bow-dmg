<template>
  <v-container>
    <v-row>
      <h1>武器</h1>
    </v-row>
    <v-row>
      <v-select
        v-model="bow"
        label="弓"
        :items="bows"
        :item-text="displayName"
        return-object
        @change="chaneBow"
      ></v-select>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          label="攻撃カスタム"
          :items="attackCustoms"
          :item-text="customDisplayName"
          return-object
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          label="会心カスタム"
          :items="affinityCustoms"
          :item-text="customDisplayName"
          return-object
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          label="属性カスタム"
          :items="elementCustoms"
          :item-text="customDisplayName"
          return-object
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-select label="パーツ強化" :disabled="!bow || !bow.parts"></v-select>
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
import bows from '@/constants/bow'
import customs from '@/constants/custom'

const elementNameMap = {
  fire: '火',
  water: '水',
  thunder: '雷',
  ice: '氷',
  dragon: '龍'
}
const slotMap = {
  1: '①',
  2: '②',
  3: '③',
  4: '④',
  5: '⑤',
  6: '⑥',
  7: '⑦'
}
const reraSlotMap = {
  10: 7,
  11: 5,
  12: 4
}

export default {
  data() {
    return {
      bows,
      bow: null
    }
  },
  computed: {
    attackCustoms() {
      const ret = customs.attack
      if (this.bow) {
        const maxSlot = reraSlotMap[this.bow.rare]
        ret.forEach((custom) => {
          custom.disabled = maxSlot < custom.slot
        })
      }
      return ret
    },
    affinityCustoms() {
      const ret = customs.affinity
      if (this.bow) {
        const maxSlot = reraSlotMap[this.bow.rare]
        ret.forEach((custom) => {
          custom.disabled = maxSlot < custom.slot
        })
      }
      return ret
    },
    elementCustoms() {
      const ret = customs.element
      if (this.bow) {
        const maxSlot = reraSlotMap[this.bow.rare]
        ret.forEach((custom) => {
          custom.disabled = maxSlot < custom.slot
        })
      }
      return ret
    },
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
  },
  methods: {
    displayName(bow) {
      const elementName = elementNameMap[bow.element.type]
      if (bow.affinity === 0) {
        return `${bow.name} [ ${bow.attack}, ${elementName}${bow.element.value} ]`
      } else {
        return `${bow.name} [ ${bow.attack}, ${elementName}${bow.element.value}, ${bow.affinity}% ]`
      }
    },
    customDisplayName(custom) {
      return `${custom.name} [ ${slotMap[custom.slot]} +${custom.value} ]`
    },
    chaneBow() {}
  }
}
</script>
