<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">武器</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <bow></bow>
      </v-col>
    </v-row>
    <customs></customs>
    <v-row>
      <v-col>
        <parts></parts>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="攻撃力"
          :value="calcuratedWeapon.attack"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="武器倍率"
          :value="calcuratedWeapon.rawAttack"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="会心率"
          :value="calcuratedWeapon.affinity"
          readonly
          reverse
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="属性値"
          :value="calcuratedWeapon.element"
          readonly
          reverse
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bow from '@/components/Bow'
import Customs from '@/components/Customs'
import Parts from '@/components/Parts'

export default {
  components: {
    Bow,
    Customs,
    Parts,
  },
  computed: {
    ...mapState(['bow', 'custom']),
    ...mapGetters(['calcuratedWeapon']),
  },
}
</script>
