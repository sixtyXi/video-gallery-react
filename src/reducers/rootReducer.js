import { combineReducers } from 'redux';

import { moviePage } from './moviePage';
import { movieList } from './movieList';

export default combineReducers({ moviePage, movieList });
