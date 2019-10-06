<template>
  <v-container>
    <v-row>
      <h1>バフ</h1>
    </v-row>
    <v-row>
      <v-select
        v-model="coating"
        :items="coatings"
        :item-text="coatingDisplay"
        label="ビン"
        clearable
      ></v-select>
    </v-row>
    <v-row>
      <v-col class="buf-col">
        <v-checkbox
          v-model="powerCharm"
          label="護符(+6)"
          color="primary"
        ></v-checkbox>
      </v-col>
      <v-col class="buf-col">
        <v-checkbox
          v-model="powerTalon"
          label="爪(+9)"
          color="primary"
        ></v-checkbox>
      </v-col>
      <v-col class="buf-col">
        <v-checkbox
          v-model="demonPowder"
          label="鬼人の粉塵(+10)"
          color="primary"
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="buf-col">
        <v-select
          v-model="canteen"
          :items="canteens"
          :item-text="displayBuf"
          item-value="value"
          label="食事"
          clearable
        ></v-select>
      </v-col>
      <v-col class="buf-col">
        <v-select
          v-model="demonDrug"
          :items="demonDrugs"
          :item-text="displayBuf"
          item-value="value"
          label="鬼人薬"
          clearable
        ></v-select>
      </v-col>
      <v-col class="buf-col">
        <v-select
          v-model="seed"
          :items="seeds"
          :item-text="displayBuf"
          item-value="value"
          label="種/丸薬"
          clearable
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { canteens, demonDrugs, seeds } from '@/constants/buf'
import { coatings } from '@/constants/bow'

export default {
  data() {
    return {
      canteens,
      demonDrugs,
      seeds,
      coatingsData: coatings
    }
  },
  computed: {
    bow() {
      return this.$store.state.bow
    },
    coatings() {
      return this.coatingsData
    },
    coating: {
      get() {
        return this.$store.state.buf.coating
      },
      set(value) {
        this.setBuf({ coating: value })
      }
    },
    powerCharm: {
      get() {
        return this.$store.state.buf.powerCharm
      },
      set(value) {
        this.setBuf({ powerCharm: value })
      }
    },
    powerTalon: {
      get() {
        return this.$store.state.buf.powerTalon
      },
      set(value) {
        this.setBuf({ powerTalon: value })
      }
    },
    demonPowder: {
      get() {
        return this.$store.state.buf.demonPowder
      },
      set(value) {
        this.setBuf({ demonPowder: value })
      }
    },
    canteen: {
      get() {
        return this.$store.state.buf.canteen
      },
      set(value) {
        this.setBuf({ canteen: value })
      }
    },
    demonDrug: {
      get() {
        return this.$store.state.buf.demonDrug
      },
      set(value) {
        this.setBuf({ demonDrug: value })
      }
    },
    seed: {
      get() {
        return this.$store.state.buf.seed
      },
      set(value) {
        this.setBuf({ seed: value })
      }
    }
  },
  watch: {
    bow() {
      if (this.bow && this.bow.coating.power) {
        this.coating = coatings[0].value
      } else if (this.bow && this.bow.coating.crossRange) {
        this.coating = coatings[1].value
      } else {
        this.coating = null
      }
      this.updateCoatings()
    }
  },
  methods: {
    displayBuf(item) {
      return `${item.name} [+${item.value}]`
    },
    coatingDisplay(item) {
      return `${item.name} [${item.value}倍]`
    },
    updateCoatings() {
      if (this.bow) {
        this.coatingsData[0].disabled = !this.bow.coating.power
        this.coatingsData[1].disabled = !this.bow.coating.crossRange
      } else {
        this.coatingsData[0].disabled = false
        this.coatingsData[1].disabled = false
      }
    },
    ...mapActions(['setBuf'])
  }
}
</script>

<style>
.buf-col {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
