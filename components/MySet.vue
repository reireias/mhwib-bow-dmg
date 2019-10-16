<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">セーブ</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>現在の設定をブラウザに保存します。</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <v-text-field
          v-model="name"
          label="マイセット名"
          :rules="rules"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn color="secondary" :disabled="!name" @click="save">セーブ</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <div class="headline">ロード</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>保存済みの設定をロードします。</p>
      </v-col>
    </v-row>
    <transition-group name="myset">
      <v-row v-for="item in mySetKeys" :key="item.key">
        <v-col cols="6">
          {{ item.name }}
        </v-col>
        <v-col cols="3">
          <v-btn color="secondary" @click="load(item.key)">ロード</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn color="alert" @click="remove(item.key)">削除</v-btn>
        </v-col>
      </v-row>
    </transition-group>
    <v-snackbar v-model="saved">マイセットをセーブしました。</v-snackbar>
    <v-snackbar v-model="loaded">マイセットをロードしました。</v-snackbar>
    <v-snackbar v-model="removed">マイセットを削除しました。</v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

const MYSET_KEY = 'myset'

export default {
  data() {
    return {
      name: '',
      rules: [this.validateName],
      saved: false,
      loaded: false,
      removed: false,
      mySetKeys: []
    }
  },
  mounted() {
    const json = localStorage.getItem(MYSET_KEY)
    if (json) {
      this.mySetKeys = JSON.parse(json)
    }
  },
  methods: {
    validateName(name) {
      return name.length > 0 || 'マイセット名は空にはできません'
    },
    save() {
      const key = this.getKey()
      this.mySetKeys.unshift({ key, name: this.name })
      localStorage.setItem(MYSET_KEY, JSON.stringify(this.mySetKeys))
      localStorage.setItem(key, JSON.stringify(this.$store.state))
      this.saved = true
    },
    load(key) {
      const json = localStorage.getItem(key)
      if (json) {
        this.setState(JSON.parse(json))
        this.loaded = true
      }
    },
    remove(key) {
      const filtered = this.mySetKeys.filter((item) => item.key !== key)
      this.mySetKeys = filtered
      localStorage.setItem(MYSET_KEY, JSON.stringify(this.mySetKeys))
      this.removed = true
    },
    getKey() {
      const now = new Date()
      return `${now.getTime()}`
    },
    ...mapActions(['setState'])
  }
}
</script>

<style>
.myset-item {
  display: inline-block;
  margin-right: 10px;
}
.myset-enter-active,
.myset-leave-active {
  transition: all 1s;
}
.myset-enter, .myset-leave-to /* .myset-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100px);
}
</style>
