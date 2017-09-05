const SET_CATEGORY = 'SET_CATEGORY';

export const CATEGORY_KEY = {
  action: 1,
  adventure: 2,
  racing: 3,
  shooting: 4,
  battle: 5,
  sports: 6,
  fancy: 7,
  puzzle: 8,
  jewels: 9,
  brain: 10,
  table: 11,
  variety: 12,
};

export const setCategory = category => ({
  type: SET_CATEGORY,
  category,
});

export const category = (state = CATEGORY_KEY.variety, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;

    default:
      return state;
  }
};
