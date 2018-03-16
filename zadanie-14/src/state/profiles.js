const initialState = {
  profiles: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profiles: state.profiles.concat({
          id: Date.now().toString(32),
          name: action.nameProfile,
          phone: action.phoneProfile,
          email: action.emailProfile,
          category: action.categoryProfile
        })
      }
    case 'REMOVE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.filter(
          profile => profile.id !== action.removedProfileId
        )
      }
    default:
      return state
  }
}