<template>
  <v-container>
    <v-row>
      <h1>モーション</h1>
    </v-row>
    <v-row>
      <v-col v-for="motion in motions" :key="motion.name">
        <v-btn @click="addMotion(motion)">{{ motion.name }}</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(selected, index) in selectedMotions" :key="selected.name">
        <v-chip close @click:close="deleteMotion(index)">{{
          selected.name
        }}</v-chip>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn>リセット</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      motions: [
        { name: '溜め1 (7×1, 0.5)' },
        { name: '溜め2 (9×2, 0.7)' },
        { name: '溜め3 (10×3, 1.0)' },
        { name: '溜め4 (11×3, 1.05)' },
        { name: 'QS (6×3, 0.5)' },
        { name: '剛射2 (9×3, 0.7)' },
        { name: '剛射3 (11×5, 1.0)' },
        { name: '剛射4 (11×6, 1.1)' }
      ],
      selectedMotions: []
    }
  },
  methods: {
    addMotion(motion) {
      this.selectedMotions = [...this.selectedMotions, motion]
    },
    deleteMotion(index) {
      this.selectedMotions.splice(index, 1)
    }
  }
}
</script>
