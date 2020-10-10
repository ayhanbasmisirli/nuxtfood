<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">
          <AppLogo />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/restaurants">
          Restaurants
        </nuxt-link>
      </li>
    </ul>
    <div class="smallnum">
      {{ cartTotalItems }}
    </div>
    <nuxt-link to="/cart">
      Cart
    </nuxt-link>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import { mapGetters } from 'vuex'

export default {

  components: {
    AppLogo
  },
  computed: {
    ...mapGetters([
      'cartTotalItems'
    ])
  }

}
</script>

<style lang="scss" scoped>

</style>
