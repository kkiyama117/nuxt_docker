<!-- users/ -->
<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start <b-icon icon="rocket" size="is-large" />"
    </h2>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.firstName + user.lastName }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    users: 'users/users'
  }),
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers'
    }),
    ...mapMutations({
      setUsers: 'users/setUsers'
    })
  }
}
</script>
