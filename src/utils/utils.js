// @flow
import type { IndexedCollection } from 'immutable';

export const mapGenres = (genres: IndexedCollection<string> | Array<string>): string => {
  return genres.map(genre => genre.replace(/^./, genre[0].toUpperCase())).join(' & ');
};
