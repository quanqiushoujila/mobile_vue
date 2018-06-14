import * as types from './mutation-types'

const mutations = {
  [types.SET_TEST] (state, val) {
    state.test = val
  }
}

export default mutations
