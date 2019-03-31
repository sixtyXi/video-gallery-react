import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MovieList } from '../../components/MovieList/MovieList';
import { Logo } from '../../components/Logo/Logo';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SummaryInfo } from '../../components/SummaryInfo/SummaryInfo';
import { MOVIES } from '../../shared/moviesMock';
import { MovieCard } from '../components/MovieCard/MovieCard';

const RESULT_INFO = 'Films by Drama genre';

export const MoviePage = () => {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <Logo />
          <SearchBtn className="searchBtnSecondary" />
          <MovieCard movie={MOVIES[1]} />
        </ContentWrapper>
      </Header>
      <main>
        <SummaryInfo>
          <div>{RESULT_INFO}</div>
        </SummaryInfo>
        <ContentWrapper>
          <MovieList movies={MOVIES} />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
