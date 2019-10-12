<template>
  <v-select
    v-model="bow"
    label="弓"
    :items="bows"
    item-text="name"
    return-object
  >
    <template slot="selection" slot-scope="data">
      <bow-detail :bow="data.item"></bow-detail>
    </template>
    <template slot="item" slot-scope="data">
      <bow-detail :bow="data.item"></bow-detail>
    </template>
  </v-select>
</template>

<script>
import { mapActions } from 'vuex'
import BowDetail from '@/components/BowDetail'
import bows from '@/constants/bow'

export default {
  components: {
    BowDetail
  },
  data() {
    return {
      bows
    }
  },
  computed: {
    bow: {
      get() {
        return this.$store.state.bow
      },
      set(value) {
        this.setBow(value)
      }
    }
  },
  methods: {
    ...mapActions(['setBow'])
  }
}
</script>
