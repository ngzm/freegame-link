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

export const getCategoryLabel = (key) => {
  const key2label = {
    1: 'Action',
    2: 'Adventure',
    3: 'Racing',
    4: 'Shooting',
    5: 'Battle',
    6: 'Sports',
    7: 'Fancy',
    8: 'Puzzle',
    9: 'Jewells',
    10: 'Brain',
    11: 'Table',
    12: 'Variety',
  };
  return key2label[key];
};

export const setCategory = category => ({
  type: SET_CATEGORY,
  category,
});

export const category = (state = CATEGORY_KEY.action, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;

    default:
      return state;
  }
};
