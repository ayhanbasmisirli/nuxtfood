<template>
  <main class="cart container">
    <h2>Your Cart</h2>
    <AppEmptyCart />
    <section v-if="cart.length">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Add Ons</th>
            <th>Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.item }}
              <span v-if="item.options">- (options){{ item.options }}</span>
            </td>
            <td>
              <span v-for="addon in item.addOns" :key="addon" class="comma">{{ addon }}</span>
            </td>
            <td>{{ item.count }}</td>
            <td>{{ item.combinedPrice }}</td>
          </tr>
          <tr>
            <td colspan="3" />
            <td class="total">
              Total: ${{ totalPriceGetter.toFixed(2) }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppEmptyCart from '@/components/AppEmptyCart.vue'

export default {
  components: {
    AppEmptyCart
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'totalPriceGetter'
    ])

  }
}
</script>

<style lang="scss" scoped>

</style>
