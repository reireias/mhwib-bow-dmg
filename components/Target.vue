<template>
  <v-container>
    <v-row>
      <h1>ターゲット</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          label="モンスター"
          :items="monsters"
          item-text="name"
          item-value="parts"
          @change="monsterChange"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          label="部位"
          :items="parts"
          item-text="name"
          item-value="rate"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import monsters from '@/constants/monster'
export default {
  data() {
    return {
      monsters,
      parts: []
    }
  },
  methods: {
    monsterChange(parts) {
      this.parts = parts
    }
  }
}
</script>
