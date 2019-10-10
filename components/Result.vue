<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">結果</div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <center>
          <v-btn color="secondary" large @click="calcurate">計算</v-btn>
        </center>
      </v-col>
    </v-row>
    <v-fade-transition>
      <v-row v-if="results.length">
        <client-only>
          <v-data-table
            class="result-table"
            :headers="headers"
            :items="results"
            hide-default-footer
          ></v-data-table>
        </client-only>
      </v-row>
    </v-fade-transition>
    <v-row v-if="results.length == 0">
      <v-col>
        <div style="height: 240px;"></div>
      </v-col>
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
        { text: 'モーション', value: 'motion', sortable: false },
        { text: '通常時', value: 'base', sortable: false },
        { text: '会心時', value: 'critical', sortable: false },
        { text: '期待値', value: 'expected', sortable: false },
        { text: '期待値合計', value: 'total', sortable: false }
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
          motion: `${motion.name} [${motion.description}]`,
          base: `物理: ${detail.base.physical}, 属性: ${detail.base.elemental}`,
          critical: `物理: ${detail.critical.physical}, 属性: ${detail.critical.elemental}`,
          expected: `物理: ${detail.expected.physical}, 属性: ${detail.expected.elemental}`,
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
