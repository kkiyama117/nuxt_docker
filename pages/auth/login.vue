<template>
  <div class="container">
    <h1>Sign in to access the page</h1>
    <div>
      <label for="firstName">
        <input id="firstName" type="firstName" value="kkiyama117" />
      </label>
      <label for="lastName">
        <input id="lastName" type="lastName" value="kkiyama" />
      </label>
      <label for="password">
        <input id="password" type="password" value="pass" />
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  methods: {
    postLogin() {
      setTimeout(() => {
        // we simulate the async request with timeout.
        const token = {
          token: 'someStringGotFromApiServiceWithAjax'
        }
        this.$store.commit('setAuth', token) // mutating to store for client rendering
        Cookie.set(token) // saving token in cookie for server rendering
        this.$router.push('/auth')
      }, 1000)
    }
  }
}
</script>
