import * as types from './mutation-types'

export default {
  [types.SHOW_USER_NAME] (state) {
    alert(state.user_name);
  }
};