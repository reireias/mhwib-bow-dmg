<template>
  <v-container>
    <v-row>
      <h1>ターゲット</h1>
    </v-row>
    <v-row>
      <v-col cols="6" sm="3">
        <v-select
          v-model="monster"
          label="モンスター"
          :items="monsters"
          item-text="name"
          return-object
        ></v-select>
      </v-col>
      <v-col cols="6" sm="3">
        <v-select
          v-model="target"
          label="部位"
          :items="parts"
          :item-text="displayPartName"
          return-object
        ></v-select>
      </v-col>
      <v-col cols="6" sm="3">
        <v-checkbox v-model="anger" label="怒り" color="primary"></v-checkbox>
      </v-col>
      <v-col cols="6" sm="3">
        <v-checkbox v-model="wounded" label="傷" color="primary"></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import monsters from '@/constants/monster'
import { elementNameMap } from '@/constants/element'

export default {
  data() {
    return {
      monsters
    }
  },
  computed: {
    monster: {
      get() {
        return this.$store.state.monster
      },
      set(value) {
        this.setMonster(value)
      }
    },
    target: {
      get() {
        return this.$store.state.target
      },
      set(value) {
        this.setTarget(value)
      }
    },
    anger: {
      get() {
        return this.$store.state.anger
      },
      set(value) {
        this.setAnger(value)
      }
    },
    wounded: {
      get() {
        return this.$store.state.wounded
      },
      set(value) {
        this.setWounded(value)
      }
    },
    parts() {
      return this.monster ? this.monster.parts : []
    },
    bow() {
      return this.$store.state.bow
    }
  },
  methods: {
    displayPartName(item) {
      // 武器が選択されていれば、属性も表示
      if (this.bow && this.bow.element) {
        const element = this.bow.element
        const elementName = elementNameMap[element.type]
        const elementValue = item[element.type]
        return `${item.name} [弾${item.ammo}, ${elementName}${elementValue}]`
      } else {
        return `${item.name} [弾${item.ammo}]`
      }
    },
    ...mapActions(['setMonster', 'setTarget', 'setWounded', 'setAnger'])
  }
}
</script>
