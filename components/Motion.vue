<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">モーション</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedMotion"
          :items="motions"
          :item-text="motionDescription"
          item-value="name"
          :value="motions[7]"
          return-object
        ></v-select>
      </v-col>
    </v-row>
    <template v-if="multiMode">
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
    </template>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import motions from '@/constants/motion'

export default {
  data() {
    return {
      motions,
      multiMode: false
    }
  },
  computed: {
    selectedMotion: {
      get() {
        return this.$store.state.motions[0]
      },
      set(value) {
        this.setMotions([value])
      }
    },
    selectedMotions: {
      get() {
        return this.$store.state.motions
      },
      set(value) {
        this.setMotions(value)
      }
    }
  },
  methods: {
    motionDescription(item) {
      return `${item.name} [${item.description}]`
    },
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
