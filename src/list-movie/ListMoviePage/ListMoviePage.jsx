import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import { SearchWrapper } from '../components/SearchWrapper/SearchWrapper';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import SummaryListMovieContainer from '../components/SummaryListMovieContainer/SummaryListMovieContainer';

export const ListMoviePage = () => {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <Logo />
          <SearchWrapper />
        </ContentWrapper>
      </Header>
      <main>
        <SummaryListMovieContainer />
        <ContentWrapper>
          <MovieListContainer />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
