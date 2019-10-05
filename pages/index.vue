<template>
  <v-container>
    <v-row>
      <h1>弓専用ダメージ計算機(仮)</h1>
    </v-row>
    <v-row>
      <weapon></weapon>
    </v-row>
    <v-row>
      <buf></buf>
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
    <v-row justify="center">
      <v-btn color="primary">計算</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import Weapon from '@/components/Weapon'
import Buf from '@/components/Buf'
import Skill from '@/components/Skill'
import Motion from '@/components/Motion'
import Target from '@/components/Target'

export default {
  components: {
    Weapon,
    Buf,
    Skill,
    Motion,
    Target
  }
}
</script>
