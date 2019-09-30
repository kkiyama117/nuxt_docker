export default {
  async getUsers({ commit }, payload) {
    // 'isLoading' を 'true' に設定
    commit('showLoading')
    const res = await this.$axios.$get('/users')
    // 'lists' にレスポンスを設定
    commit('setUsers', res)
    // 'isLoading' を 'false' に設定
    commit('hideLoading')
  }
}