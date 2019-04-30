export const SORT_FILTERS = [
  {
    value: 'release_date',
    title: 'release date'
  },
  {
    value: 'vote_average',
    title: 'rating'
  }
];

export const SEARCH_FILTERS = [
  {
    value: 'title',
    title: 'title'
  },
  {
    value: 'genres',
    title: 'genre'
  }
];

export const DEFAULT_FILTERS = {
  searchBy: SEARCH_FILTERS[0].value,
  sortBy: SORT_FILTERS[0].value,
  search: ''
};
