<template>
  <v-tabs fixed-tabs>
    <v-tab>計算</v-tab>
    <v-tab>マイセット</v-tab>
    <v-tab-item>
      <v-container>
        <v-row justify="center">
          <div class="title secondary--text">MHW:Iceborne</div>
        </v-row>
        <v-row justify="center">
          <div class="display-1 secondary--text">弓専用ダメージ計算機</div>
        </v-row>
        <v-row>
          <weapon></weapon>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <buff></buff>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <skill></skill>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <motion></motion>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <target></target>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <result></result>
        </v-row>
      </v-container>
    </v-tab-item>
    <v-tab-item>
      <my-set></my-set>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import Weapon from '@/components/Weapon'
import Buff from '@/components/Buff'
import Skill from '@/components/Skill'
import Motion from '@/components/Motion'
import Target from '@/components/Target'
import Result from '@/components/Result'
import MySet from '@/components/MySet'

export default {
  components: {
    Weapon,
    Buff,
    Skill,
    Motion,
    Target,
    Result,
    MySet
  },
  data() {
    return { show: false }
  },
  beforeCreate() {
    this.$store.dispatch('loadLocal')
  }
}
</script>
