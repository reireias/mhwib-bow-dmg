<template>
  <v-select
    v-model="bow"
    label="弓"
    :items="bows"
    :item-text="displayName"
    return-object
  ></v-select>
</template>

<script>
import bows from '@/constants/bow'

const elementNameMap = {
  fire: '火',
  water: '水',
  thunder: '雷',
  ice: '氷',
  dragon: '龍'
}

export default {
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      bows
    }
  },
  computed: {
    bow: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    displayName(bow) {
      const elementName = elementNameMap[bow.element.type]
      if (bow.affinity === 0) {
        return `${bow.name} [ ${bow.attack}, ${elementName}${bow.element.value} ]`
      } else {
        return `${bow.name} [ ${bow.attack}, ${elementName}${bow.element.value}, ${bow.affinity}% ]`
      }
    }
  }
}
</script>
