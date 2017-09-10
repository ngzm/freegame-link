const SET_WIN_WIDTH = 'SET_WIN_WIDTH';
const SET_WIN_SCROLL_TOP = 'SET_WIN_SCROLL_TOP';

export const setWinWidth = width => ({
  type: SET_WIN_WIDTH,
  width,
});

export const setWinScrollTop = scrollTop => ({
  type: SET_WIN_SCROLL_TOP,
  scrollTop,
});

const initState = {
  width: 1280,
  scrollTop: 0,
};

export const vwindow = (state = initState, action) => {
  switch (action.type) {
    case SET_WIN_WIDTH:
      return Object.assign({}, state, { width: action.width });

    case SET_WIN_SCROLL_TOP:
      return Object.assign({}, state, { scrollTop: action.scrollTop });

    default:
      return state;
  }
};
