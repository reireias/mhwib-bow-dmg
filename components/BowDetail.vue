<template>
  <div>
    {{ bow.name }} [ {{ bow.attack }},
    <span :class="bow.element.type">{{ element }}</span>
    {{ affinity }}{{ slot }} ]
  </div>
</template>

<script>
import { elementNameMap } from '@/constants/element'

export default {
  props: {
    bow: {
      type: Object,
      default: null,
      required: true,
    },
  },
  computed: {
    affinity() {
      return this.bow.affinity === 0 ? '' : `, ${this.bow.affinity}%`
    },
    element() {
      const str = `${elementNameMap[this.bow.element.type]}${
        this.bow.element.value
      }`
      return this.bow.element.hidden ? `(${str})` : str
    },
    slot() {
      return this.bow.slot ? `, ${this.bow.slot}` : ''
    },
  },
}
</script>

<style>
.fire {
  color: red;
}
.water {
  color: darkturquoise;
}
.ice {
  color: blue;
}
.thunder {
  color: darkorange;
}
.dragon {
  color: purple;
}
</style>
