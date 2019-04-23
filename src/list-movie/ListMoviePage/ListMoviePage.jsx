import React from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import SummaryListMovieContainer from '../components/SummaryListMovieContainer/SummaryListMovieContainer';
import UpdateFiltersContainer from '../components/UpdateFiltersContainer/UpdateFiltersContainer';

export const ListMoviePage = () => {
  return (
    <UpdateFiltersContainer>
      <Header>
        <ContentWrapper>
          <Logo />
          <SearchContainer />
        </ContentWrapper>
      </Header>
      <main>
        <SummaryListMovieContainer />
        <ContentWrapper>
          <MovieListContainer />
        </ContentWrapper>
      </main>
      <Footer />
    </UpdateFiltersContainer>
  );
};
