import axios from 'axios'

const BASE_URL = 'https://qiita.com/api/v2/'

export const state = () => ({
  // API のレスポンスデータ
  lists: [],
  // データローディング中かどうかを判定するフラグ
  isLoading: false
})

export const mutations = {
  setItems(state, lists) {
    state.lists = lists
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
  }
}

export const actions = {
  async getItems({ commit }, payload) {
    // 'isLoading' を 'true' に設定
    commit('showLoading')
    // リクエスト送信
    const response = await axios
      .get(`${BASE_URL}items`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          page: 1,
          per_page: 20,
          query: payload.keyword
        },
        timeout: 15000
      })
      .catch(() => {
        // 'isLoading' を 'false' に設定
        commit('hideLoading')
        // エラー画面に遷移
        this.$router.push('/error')
      })
    // 'lists' にレスポンスを設定
    commit('setItems', response.data)
    // 'isLoading' を 'false' に設定
    commit('hideLoading')
  }
}

export const getters = {
  // isPositive(state) {
  //   return state.count > 0
  // },
  // isNegative(state) {
  //   return state.count < 0
  // }
}

// 多分使わないけどClassic mode用
export const users = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
