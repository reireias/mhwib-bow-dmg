<template>
  <v-select
    v-model="selected"
    label="パーツ強化"
    :disabled="!bow || !bow.parts"
    :items="parts"
    item-text="name"
    clearable
    return-object
  ></v-select>
</template>

<script>
import parts from '@/constants/parts'

export default {
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      parts,
      selectedData: null
    }
  },
  computed: {
    bow() {
      return this.$store.state.bow
    },
    selected: {
      get() {
        return this.selectedData
      },
      set(v) {
        this.selectedData = v
        this.$emit(
          'input',
          v ? v.value : { attack: 0, affinity: 0, element: 0 }
        )
      }
    }
  },
  watch: {
    bow() {
      this.selected = null
    }
  }
}
</script>
