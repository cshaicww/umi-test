export default {
  namespace: 'home',

  state: {
    gameState: 'WAITING'
  },

  reducers: {
    setGameState(state, action) {
      return {
        ...state,
        gameState: action.payload,
      };
    },
  }
}