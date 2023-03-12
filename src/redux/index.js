const globalState = {
  // navside icon state value
  homeIcon: true,
  watchlistIcon: false,
  discoverIcon: false,
  navsideMobile: false,
  keyword: '',
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
  if (action.type === 'CHANGE_NAVSIDE_TRUE') {
    return {
      ...state,
      navsideMobile: true,
    }
  }
  if (action.type === 'CHANGE_NAVSIDE_FALSE') {
    return {
      ...state,
      navsideMobile: false,
    }
  }
  if (action.type === 'ADD_KEYWORD') {
    return {
      ...state,
      keyword: action.keyword,
    }
  }
  return state
}

export default rootReducer
