export const mapGenres = genres => {
  return genres.map(genre => genre.replace(/^./, genre[0].toUpperCase())).join(' & ');
};
