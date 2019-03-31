import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import { MovieList } from '../../components/MovieList/MovieList';
import { SearchWrapper } from '../components/SearchWrapper/SearchWrapper';
import { SortContainer } from '../components/SortContainer/SortContainer';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SummaryInfo } from '../../components/SummaryInfo/SummaryInfo';
import { MOVIES } from '../../shared/moviesMock';
import { SORT_FILTERS } from '../../shared/filtersMock';

const RESULT_INFO = '7 movies found';

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
          <div>{RESULT_INFO}</div>
          <SortContainer title="Sort by" type="label" filters={SORT_FILTERS} />
        </SummaryInfo>
        <ContentWrapper>
          <MovieList movies={MOVIES} />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
