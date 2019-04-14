import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import MoviesByGenreContainer from '../components/MoviesByGenreContainer/MoviesByGenreContainer';
import { Logo } from '../../components/Logo/Logo';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SummaryInfo } from '../../components/SummaryInfo/SummaryInfo';
import MovieCardContainer from '../components/MovieCardContainer/MovieCardContainer';
import GenresInfoContainer from '../components/GenresInfoContainer/GenresInfoContainer';

export const MoviePage = () => {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <Logo />
          <SearchBtn className="searchBtnSecondary" />
          <MovieCardContainer id={680} />
        </ContentWrapper>
      </Header>
      <main>
        <SummaryInfo>
          <GenresInfoContainer />
        </SummaryInfo>
        <ContentWrapper>
          <MoviesByGenreContainer />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
