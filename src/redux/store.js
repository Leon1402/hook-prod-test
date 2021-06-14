import { createStore } from "redux";

const CHANGE_FAVORITE = 'CHANGE_FAVORITE';
const CHANGE_CART_COUNT = 'CHANGE_CART_COUNT';
const CHANGE_FOCUS = 'CHANGE_FOCUS'

let initialState = {
  items: [
    {
      id: 0,
      info: {
        name: 'Best-in 10 British Big Eggs',
        price: 1.59,
        count: 2,
        favorite: false,
        inCart: 2,
        discount: '',
        allergy: [],
      },
      nutrilon: [
        { weight: 28, name: 'Kkal.', percent: 4},
        { weight: 1.3, name: 'Proteins', percent: 10},
        { weight: 0, name: 'Fats', percent: 12},
        { weight: 28, name: 'Сarbs', percent: 10},
        { weight: 6.4, name: 'Niacin.', percent: 40},
        { weight: 0.8, name: 'Vitamin B6.', percent: 57},
      ]
    },
    {
      id: 1,
      info: {
        name: 'Творог',
        price: 2.59,
        count: 4,
        favorite: false,
        inCart: 1,
        discount: '',
        allergy: [],
      },
      nutrilon: [
        { weight: 28, name: 'Kkal.', percent: 4},
        { weight: 1.3, name: 'Proteins', percent: 10},
        { weight: 0, name: 'Fats', percent: 12},
        { weight: 28, name: 'Сarbs', percent: 10},
        { weight: 6.4, name: 'Niacin.', percent: 40},
        { weight: 0.8, name: 'Vitamin B6.', percent: 57},
      ]
    },
    {
      id: 2,
      info: {
        name: 'Just Milk Semi-Skimmed 6 x 1L (Case of 2)',
        price: 1.32,
        count: 2,
        favorite: false,
        inCart: 1,
        discount: '',
        allergy: [],
      },
      nutrilon: [
        { weight: 28, name: 'Kkal.', percent: 4},
        { weight: 1.3, name: 'Proteins', percent: 10},
        { weight: 0, name: 'Fats', percent: 12},
        { weight: 28, name: 'Сarbs', percent: 10},
        { weight: 6.4, name: 'Niacin.', percent: 40},
        { weight: 0.8, name: 'Vitamin B6.', percent: 57},
      ]
    }
  ],
  promocodes: [
    '111', '222', '333'
  ],
  onFocus: false
};

const productsPage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FAVORITE:
      return {
        ...state,
        items: [
          ...state.items.map(item => {
            if (item.id === action.id) {
              return {
                ...item,
                info: {
                  ...item.info,
                  favorite: !item.info.favorite
                }
              }
            }
            return item
          }),
        ]
      }
    case CHANGE_CART_COUNT:
      return {
        ...state,
        items: [
          ...state.items.map(item => {
            if (item.id === action.id) {
              return {
                ...item,
                info: {
                  ...item.info,
                  count: item.info.count - action.direction,
                  inCart: item.info.inCart + action.direction
                }
              }
            }
            return item
          }),
        ]
      }
    case CHANGE_FOCUS:
      return {
        ...state,
        onFocus: action.focus
      }
    default:
      return state
  }
}

export const changeFavorite = (id) => {
  return {
    type: CHANGE_FAVORITE,
    id
  }
}

export const changeCartCount = (id, direction) => {
  return {
    type: CHANGE_CART_COUNT,
    id,
    direction
  }
}

export const changeFocus = (focus) => {
  return {
    type: CHANGE_FOCUS,
    focus
  }
}


export const store = createStore(productsPage)
