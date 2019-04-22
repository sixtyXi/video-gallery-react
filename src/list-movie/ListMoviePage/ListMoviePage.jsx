import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import { SearchWrapper } from '../components/SearchWrapper/SearchWrapper';
import SortFilterContainer from '../components/SortFilterContainer/SortFilterContainer';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SummaryInfo } from '../../components/SummaryInfo/SummaryInfo';
import MovieQtyContainer from '../components/MovieQtyContainer/MovieQtyContainer';

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
        <SummaryInfo>
          <MovieQtyContainer />
          <SortFilterContainer />
        </SummaryInfo>
        <ContentWrapper>
          <MovieListContainer />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
