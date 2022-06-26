import { menuInactiveStyle } from "./hamburger";

//item.categories[0]._ref == "941c3810-ba2d-4af5-9860-a8bc6ad6e851"

export const initialState = {
  menuActive: menuInactiveStyle,
  posts: [],
  categories: [],
  filteredPosts: [],
  menuHamburgerFlag: false,
  menuActiveFlag: false,
};

export default function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "MENU_ACTIVE":
      return {
        ...state,
        menuActive: action.menuActive,
      };

    case "MENU_INACTIVE":
      return {
        ...state,
        menuActive: action.menuActive,
      };

    case "POSTS":
      return {
        ...state,
        posts: action.posts,
      };

    case "FILTERED_ID":
      return {
        ...state,
        filteredId: action.filteredId,
      };

    case "FILTERED_POSTS":
      return {
        ...state,
        filteredPosts: action.filteredPosts,
      };

    case "CATEGORIES":
      return {
        ...state,
        categories: action.categories,
      };

    case "MENU_HAMBURGER":
      return {
        ...state,
        menuHamburgerFlag: action.menuHamburgerFlag,
      };

    case "MENU_ACTIVE_FLAG":
      return {
        ...state,
        menuActiveFlag: action.menuActiveFlag,
      };

    default:
      return {
        ...state,
      };
  }
}
