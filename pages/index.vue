<template>
  <v-container>
    <v-row>
      <h1>弓専用ダメージ計算機(仮)</h1>
    </v-row>
    <v-row>
      <weapon></weapon>
    </v-row>
    <v-row>
      <buff></buff>
    </v-row>
    <v-row>
      <skill></skill>
    </v-row>
    <v-row>
      <motion></motion>
    </v-row>
    <v-row>
      <target></target>
    </v-row>
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
  }
}
</script>
