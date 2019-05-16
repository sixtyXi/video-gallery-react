// @flow

export const mapGenres = (genres: Array<string>): string => {
  return genres.map(genre => genre.replace(/^./, genre[0].toUpperCase())).join(' & ');
};
