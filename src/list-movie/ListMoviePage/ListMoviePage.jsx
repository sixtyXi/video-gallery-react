import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import { MovieList } from '../../components/MovieList/MovieList';
import { SearchContainer } from '../components/SearchContainer/SearchContainer';
import { SortContainer } from '../components/SortContainer/SortContainer';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SummaryInfo } from '../../components/SummaryInfo/SummaryInfo';
import { MOVIES } from '../../shared/mock';

const RESULT_INFO = '7 movies found';

export const ListMoviePage = () => {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <Logo />
          <SearchContainer />
        </ContentWrapper>
      </Header>
      <SummaryInfo>
        <div>{RESULT_INFO}</div>
        <SortContainer />
      </SummaryInfo>
      <ContentWrapper>
        <MovieList movies={MOVIES} />
      </ContentWrapper>
      <Footer />
    </Fragment>
  );
};
