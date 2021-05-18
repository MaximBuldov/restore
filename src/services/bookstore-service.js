
export default class BookstoreService {

  _apiBase = 'https://react.wecan.of.by/wp-json/wp/v2';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
    }
    return await res.json();
  }
  getBooks = async () => {
    const res = await this.getResource(`/books/`);
    //console.log(res.map(this._transformBook));
    return res.map(this._transformBook);
  };
  _transformBook = (book) => {
    return {
      id: book.id,
      title: book.title.rendered,
      author: book.acf.author,
      coverImage: book.featured_media_src_url,
      price: book.acf.price
    }
  }

}
