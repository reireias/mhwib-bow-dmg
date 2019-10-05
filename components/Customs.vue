<template>
  <v-row>
    <v-col class="custom-select" cols="12" sm="4">
      <v-select
        v-model="attack"
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
        v-model="affinity"
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
        v-model="element"
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
import { mapActions } from 'vuex'
import { slotMap, rareSlotMap } from '@/constants/slot'
import customs from '@/constants/custom'

export default {
  data() {
    return {
      attackCustoms: customs.attack,
      affinityCustoms: customs.affinity,
      elementCustoms: customs.element
    }
  },
  computed: {
    bow() {
      return this.$store.state.bow
    },
    maxSlot() {
      return rareSlotMap[this.bow.rare]
    },
    attack: {
      get() {
        return this.$store.state.custom.attack
      },
      set(value) {
        this.setCustomAttack(value)
        this.update()
      }
    },
    affinity: {
      get() {
        return this.$store.state.custom.affinity
      },
      set(value) {
        this.setCustomAffinity(value)
        this.update()
      }
    },
    element: {
      get() {
        return this.$store.state.custom.element
      },
      set(value) {
        this.setCustomElement(value)
        this.update()
      }
    },
    attackSlot() {
      return this.attack ? this.attack.slot : 0
    },
    affinitySlot() {
      return this.affinity ? this.affinity.slot : 0
    },
    elementSlot() {
      return this.element ? this.element.slot : 0
    }
  },
  watch: {
    bow() {
      if (this.bow) {
        this.update()
      }
    }
  },
  methods: {
    customDisplayName(item) {
      return `${item.name} [ ${slotMap[item.slot]} +${item.value} ]`
    },
    // レア度によるスロットと、現在選択されているカスタム強化から、
    // 上限を超える選択肢をdisabledにする
    update() {
      this.updateCustoms(
        this.attackCustoms,
        this.affinitySlot + this.elementSlot
      )
      this.updateCustoms(
        this.affinityCustoms,
        this.attackSlot + this.elementSlot
      )
      this.updateCustoms(
        this.elementCustoms,
        this.attackSlot + this.affinitySlot
      )
    },
    updateCustoms(targetCustoms, otherSlot) {
      targetCustoms.forEach((item) => {
        item.disabled = this.maxSlot < item.slot + otherSlot
      })
    },
    ...mapActions(['setCustomAttack', 'setCustomAffinity', 'setCustomElement'])
  }
}
</script>

<style>
.custom-select {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
