import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import SummaryListMovieContainer from '../components/SummaryListMovieContainer/SummaryListMovieContainer';

export const ListMoviePage = () => {
  return (
    <Fragment>
      <Header>
        <Logo />
        <SearchContainer />
      </Header>
      <main>
        <SummaryListMovieContainer />
        <ContentWrapper>
          <MovieListContainer />
        </ContentWrapper>
      </main>
    </Fragment>
  );
};
