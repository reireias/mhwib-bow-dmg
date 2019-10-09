<template>
  <v-container>
    <v-row justify="center">
      <v-btn color="primary" @click="calcurate">計算</v-btn>
    </v-row>
    <v-row>
      <client-only>
        <v-data-table
          class="result-table"
          :headers="headers"
          :items="results"
          hide-default-footer
        ></v-data-table>
      </client-only>
    </v-row>
  </v-container>
</template>

<script>
import { damageDetail } from 'mhwdmg'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      results: [],
      headers: [
        { text: 'モーション', value: 'motionName', sortable: false },
        { text: 'ダメージ', value: 'damageText', sortable: false },
        { text: '物理', value: 'physical', sortable: false },
        { text: '属性', value: 'elemental', sortable: false },
        { text: '合計', value: 'total', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState(['bow', 'motions']),
    ...mapGetters(['condition'])
  },
  methods: {
    calcurate() {
      // TODO: add validate
      const cond = this.condition
      this.results = this.motions.map((motion) => {
        const motionParam = {
          value: motion.value,
          elementRate: motion.elementRate
        }
        cond.motion = motionParam
        const detail = damageDetail(cond)
        const expected = detail.expected.physical + detail.expected.elemental
        return {
          motionName: motion.name,
          count: motion.count,
          expected: this.round(expected),
          damageText: `${this.round(expected)} × ${motion.count}`,
          physical: this.round(detail.expected.physical),
          elemental: this.round(detail.expected.elemental),
          total: Math.round(expected * motion.count * 100) / 100
        }
      })
    },
    round(value) {
      return Math.round(value * 100) / 100
    }
  }
}
</script>

<style>
.v-data-table-header-mobile {
  display: none;
}
.result-table {
  width: 100%;
}
</style>
