<template>
  <v-container>
    <v-row>
      <h1>モーション</h1>
    </v-row>
    <v-row>
      <v-col v-for="motion in motions" :key="motion.name" cols="6" md="3">
        <v-btn @click="addMotion(motion)"
          >{{ motion.name }}
          <div class="motion-description">
            &nbsp;[{{ motion.description }}]
          </div></v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(selected, index) in selectedMotions" :key="index">
        <v-chip close @click:close="deleteMotion(index)">{{
          selected.name
        }}</v-chip>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn @click="reset">リセット</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import motions from '@/constants/motion'

export default {
  data() {
    return {
      motions
    }
  },
  computed: {
    selectedMotions: {
      get() {
        return this.$store.state.motions
      },
      set(value) {
        this.setMotions(value)
      }
    }
  },
  mounted() {
    if (!this.selectedMotions.length) {
      this.addMotion(motions[7])
    }
  },
  methods: {
    addMotion(motion) {
      this.selectedMotions = [...this.selectedMotions, motion]
    },
    deleteMotion(index) {
      const newMotions = [...this.selectedMotions]
      newMotions.splice(index, 1)
      this.selectedMotions = newMotions
    },
    reset() {
      this.selectedMotions = []
    },
    ...mapActions(['setMotions'])
  }
}
</script>

<style>
.motion-description {
  font-size: 12px;
  color: gray;
}
</style>
