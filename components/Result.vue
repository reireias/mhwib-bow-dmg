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
      <div v-if="results.length">
        <v-row>
          <v-col>
            <v-checkbox
              v-model="showText"
              color="primary"
              label="テキストで結果を表示"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row v-if="!showText">
          <client-only>
            <v-data-table
              class="result-table"
              :headers="headers"
              :items="results"
              hide-default-footer
            ></v-data-table>
          </client-only>
        </v-row>
        <v-row v-else>
          <v-col>
            <result-text :result="results[0]"></result-text>
          </v-col>
        </v-row>
      </div>
    </v-fade-transition>
    <div v-if="history.length > 0">
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <div class="headline">履歴</div>
        </v-col>
      </v-row>
      <v-row>
        <client-only>
          <v-data-table
            class="result-table"
            :headers="historyHeaders"
            :items="history"
            hide-default-footer
          >
            <template v-slot:item.delete="{ item }">
              <v-icon @click="deleteHistory(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </client-only>
      </v-row>
    </div>
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
import ResultText from '@/components/ResultText'

const headers = [
  { text: 'モーション', value: 'motion', sortable: false },
  { text: '通常時', value: 'base', sortable: false },
  { text: '会心時', value: 'critical', sortable: false },
  { text: '期待値', value: 'expected', sortable: false },
  { text: '期待値合計', value: 'total', sortable: false },
]
export default {
  components: {
    ResultText,
  },
  data() {
    return {
      showText: false,
      results: [],
      headers,
      historyHeaders: [
        { text: '武器', value: 'bow', sortable: false },
        ...headers,
        { text: '削除', value: 'delete', sortable: false },
      ],
      resltText: '',
      historyData: [],
    }
  },
  computed: {
    history() {
      if (this.historyData.length === 0) {
        return []
      }
      const currentResultId = this.results[0].id
      return this.historyData.filter((h) => h.id !== currentResultId)
    },
    ...mapState(['bow', 'motions']),
    ...mapGetters(['condition']),
  },
  methods: {
    calcurate() {
      // TODO: add validate
      const cond = this.condition
      this.results = this.motions.map((motion) => {
        const motionParam = {
          value: motion.value,
          elementRate: motion.elementRate,
        }
        cond.motion = motionParam
        const detail = damageDetail(cond)
        const expected = detail.expected.physical + detail.expected.elemental
        return {
          id: this.getId(),
          bow: this.bow.name,
          motion: `${motion.name} [${motion.description}]`,
          base: `物理: ${detail.base.physical}, 属性: ${detail.base.elemental}`,
          critical: `物理: ${detail.critical.physical}, 属性: ${detail.critical.elemental}`,
          expected: `物理: ${this.round(
            detail.expected.physical
          )}, 属性: ${this.round(detail.expected.elemental)}`,
          total: this.round(expected * motion.count),
        }
      })
      this.historyData.unshift(this.results[0])
    },
    round(value) {
      return Math.round(value * 100) / 100
    },
    getId() {
      const now = new Date()
      return `${now.getTime()}`
    },
    deleteHistory(item) {
      this.historyData = this.historyData.filter((h) => h.id !== item.id)
    },
  },
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
