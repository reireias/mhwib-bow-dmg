<template>
  <v-select
    v-model="value"
    label="パーツ強化"
    :disabled="!bow || !bow.parts"
    :items="parts"
    item-text="name"
    clearable
    return-object
  ></v-select>
</template>

<script>
import { mapActions } from 'vuex'
import parts from '@/constants/parts'

export default {
  data() {
    return {
      parts
    }
  },
  computed: {
    bow() {
      return this.$store.state.bow
    },
    value: {
      get() {
        return this.$store.state.parts
      },
      set(v) {
        this.setParts(v)
      }
    }
  },
  watch: {
    bow() {
      if (this.bow && !this.bow.parts) {
        this.value = null
      }
    }
  },
  methods: {
    ...mapActions(['setParts'])
  }
}
</script>
