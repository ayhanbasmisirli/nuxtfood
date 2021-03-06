import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  fooddata: [],
  cart: []
})

export const getters = {
  totalPriceGetter: (state) => {
    if (!state.cart.length) { return 0 }
    return state.cart.reduce((acc, next) => acc + +next.combinedPrice, 0)
  },
  cartTotalItems: (state) => {
    if (!state.cart.length) { return 0 }
    return state.cart.length
  }
}

export const mutations = {
  updateFoodData: (state, payload) => {
    state.fooddata = payload
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4()
    state.cart.push(formOutput)
  }
}

export const actions = {
  async getFoodData ({ state, commit }) {
    if (state.fooddata.length) { return }
    try {
      await fetch(
        'https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.AWS_API_KEY
          }
        }
      ).then(response => response.json()).then((data) => {
        commit('updateFoodData', data)
      })
    } catch (error) {

    }
  }
}
