const SET_SORT_KEY = 'SET_SORT_KEY';

export const SORT_KEY = {
  update: 1,
  star: 2,
  favorite: 3,
  access: 4,
};

export const setSortKey = sortkey => ({
  type: SET_SORT_KEY,
  sortkey,
});

export const sortkey = (state = [], action) => {
  switch (action.type) {
    case SET_SORT_KEY:
      return action.sortkey;

    default:
      return state;
  }
};
