const globalState = {
  // navside icon state value
  homeIcon: true,
  watchlistIcon: false,
  discoverIcon: false,
}

const rootReducer = (state = globalState, action) => {
  // navside icon state conditional
  if (action.type === 'CHANGE_HOME_ICON_COLOR') {
    return {
      ...state,
      homeIcon: true,
      watchlistIcon: false,
      discoverIcon: false,
    }
  }
  if (action.type === 'CHANGE_WATCHLIST_ICON_COLOR') {
    return {
      ...state,
      homeIcon: false,
      watchlistIcon: true,
      discoverIcon: false,
    }
  }
  if (action.type === 'CHANGE_DISCOVER_ICON_COLOR') {
    return {
      ...state,
      homeIcon: false,
      watchlistIcon: false,
      discoverIcon: true,
    }
  }
  return state
}

export default rootReducer
