export default {
  setUsers(state, users) {
    state.users = users
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
  }
}
