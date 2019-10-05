<template>
  <v-row>
    <v-col class="custom-select" cols="12" sm="4">
      <v-select
        v-model="attackCustom"
        label="攻撃カスタム"
        :disabled="!bow"
        :items="attackCustoms"
        :item-text="customDisplayName"
        clearable
        return-object
      ></v-select>
    </v-col>
    <v-col class="custom-select" cols="12" sm="4">
      <v-select
        v-model="affinityCustom"
        label="会心カスタム"
        :disabled="!bow"
        :items="affinityCustoms"
        :item-text="customDisplayName"
        clearable
        return-object
      ></v-select>
    </v-col>
    <v-col class="custom-select" cols="12" sm="4">
      <v-select
        v-model="elementCustom"
        label="属性カスタム"
        :disabled="!bow"
        :items="elementCustoms"
        :item-text="customDisplayName"
        clearable
        return-object
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import customs from '@/constants/custom'

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
  props: {
    bow: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      attackCustom: null,
      affinityCustom: null,
      elementCustom: null
    }
  },
  computed: {
    attackCustoms() {
      const ret = customs.attack
      if (this.bow) {
        const maxSlot = reraSlotMap[this.bow.rare]
        ret.forEach((custom) => {
          custom.disabled =
            maxSlot <
            custom.slot + this.affinityCustomSlot + this.elementCustomSlot
        })
      }
      return ret
    },
    affinityCustoms() {
      const ret = customs.affinity
      if (this.bow) {
        const maxSlot = reraSlotMap[this.bow.rare]
        ret.forEach((custom) => {
          custom.disabled =
            maxSlot <
            custom.slot + this.attackCustomSlot + this.elementCustomSlot
        })
      }
      return ret
    },
    elementCustoms() {
      const ret = customs.element
      if (this.bow) {
        const maxSlot = reraSlotMap[this.bow.rare]
        ret.forEach((custom) => {
          custom.disabled =
            maxSlot <
            custom.slot + this.attackCustomSlot + this.affinityCustomSlot
        })
      }
      return ret
    },
    attackCustomSlot() {
      return this.attackCustom ? this.attackCustom.slot : 0
    },
    affinityCustomSlot() {
      return this.affinityCustom ? this.affinityCustom.slot : 0
    },
    elementCustomSlot() {
      return this.elementCustom ? this.elementCustom.slot : 0
    }
  },
  methods: {
    customDisplayName(custom) {
      return `${custom.name} [ ${slotMap[custom.slot]} +${custom.value} ]`
    }
  }
}
</script>

<style>
.custom-select {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
