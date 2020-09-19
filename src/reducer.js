export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQDsrVbQSfywsKzRUPuWnF9GAnx7RIxpJqM0_S7W7mNYsjugjhBFqPOyYt7BeLcA0MahP3QKjRd7E4m7IZtR0s87SURjRRiT3lxd3TtFYZVx-fiLWpm-vncoR2SDxV_fPYwcB8iPqclzfBCwTd6HVIkAMCWK4P7R_iUt5NCCrjXoSX64",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
