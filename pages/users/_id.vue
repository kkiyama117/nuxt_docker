<!-- users/ -->
<template>
  <section class="section">
    <h2 id="testH2" class="title is-3 has-text-grey">
      "users <b-icon icon="rocket" size="is-large" />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author:
      <a href="https://github.com/kkiyama117">
        KKiyama117
      </a>
    </h3>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  // URLのバリデーション
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  },
  computed: {
    ...mapState({})
  }
}
</script>
