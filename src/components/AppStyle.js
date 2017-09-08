const style = {
  MINIMUM_PC_WIDTH: 1280,
  SIDEMENU_WIDTH: 300,
  SIDEMENU_PAPER_WIDTH: 280,
  MAIN_GRIDTILE_WIDTH: 250,
  MAIN_GRIDTILE_HEIGHT: 180,
  MAIN_GRIDLIST_PAD: 12,
};
export default style;

export const getWinSize = () => window.innerWidth;

export const calcGridCols = (winSize) => {
  const mWidth = (winSize > style.MINIMUM_PC_WIDTH) ? (winSize - 320) - 120 : winSize - 120;
  return Math.floor(mWidth / style.MAIN_GRIDTILE_WIDTH);
};

export const calcGridWidth = cols => (
  (cols * (style.MAIN_GRIDTILE_WIDTH + style.MAIN_GRIDLIST_PAD)) + 18
);
