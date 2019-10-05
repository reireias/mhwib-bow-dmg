<template>
  <v-select
    label="パーツ強化"
    :disabled="!bow || !bow.parts"
    :items="parts"
    item-text="name"
    return-object
  ></v-select>
</template>

<script>
import parts from '@/constants/parts'

export default {
  props: {
    bow: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      parts
    }
  }
}
</script>
