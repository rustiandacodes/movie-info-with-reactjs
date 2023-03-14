import ActionType from './globalActionType'

const globalState = {
  // navside icon state value
  homeIcon: true,
  watchlistIcon: false,
  discoverIcon: false,
  navsideMobile: false,
  keyword: '',
  detailMovie: [],
  discover: [],
  discoverByGenre: '',
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ],
  selectedGenre: 'All',
}

const rootReducer = (state = globalState, action) => {
  // navside icon state conditional
  switch (action.type) {
    case ActionType.CHANGE_HOME_ICON_COLOR:
      return {
        ...state,
        homeIcon: true,
        watchlistIcon: false,
        discoverIcon: false,
      }
    case ActionType.CHANGE_WATCHLIST_ICON_COLOR:
      return {
        ...state,
        homeIcon: false,
        watchlistIcon: true,
        discoverIcon: false,
      }
    case ActionType.CHANGE_DISCOVER_ICON_COLOR:
      return {
        ...state,
        homeIcon: false,
        watchlistIcon: false,
        discoverIcon: true,
      }

    // navside pop up and close on mobile
    case ActionType.CHANGE_NAVSIDE_TRUE:
      return {
        ...state,
        navsideMobile: true,
      }
    case ActionType.CHANGE_NAVSIDE_FALSE:
      return {
        ...state,
        navsideMobile: false,
      }

    // catch keyword on change from navbar
    case ActionType.ADD_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      }

    // add some movie to show detail movie
    case ActionType.ADD_DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: action.detailMovie,
      }

    // add genres to find movies by genre
    case ActionType.ADD_DETAIL_GENRE:
      return {
        ...state,
        selectedGenre: action.selectedGenre,
      }

    case ActionType.ADD_DISCOVER_MOVIELIST:
      return {
        ...state,
        discover: action.discover,
      }

    default:
      return state
  }
}

export default rootReducer
