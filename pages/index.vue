<template>
  <v-container>
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
</template>

<script>
import Weapon from '@/components/Weapon'
import Buff from '@/components/Buff'
import Skill from '@/components/Skill'
import Motion from '@/components/Motion'
import Target from '@/components/Target'
import Result from '@/components/Result'

export default {
  components: {
    Weapon,
    Buff,
    Skill,
    Motion,
    Target,
    Result
  },
  data() {
    return { show: false }
  }
}
</script>
