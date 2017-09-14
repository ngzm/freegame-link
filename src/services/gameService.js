import naxios from '../libs/naxios';

/**
 * File Upload 処理用サービス
 */
export default class GameService {
  /**
   * get games which belongs to the category
   */
  static getGames(category, success, fail) {
    // const url = (category) ? `/game/category/${category}` : '/game/category/';
    const url = `/games/games${category}.json`;
    naxios.get(url)
      .then((res) => { success(res); })
      .catch((err) => { fail(err); });
  }
}
