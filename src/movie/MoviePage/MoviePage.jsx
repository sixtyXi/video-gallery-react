import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import MoviesByGenreContainer from '../components/MoviesByGenreContainer/MoviesByGenreContainer';
import { Logo } from '../../components/Logo/Logo';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import MovieCardContainer from '../components/MovieCardContainer/MovieCardContainer';
import GenresInfoContainer from '../components/GenresInfoContainer/GenresInfoContainer';

export const MoviePage = () => {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <Logo />
          <Link to="/">
            <SearchBtn className="searchBtnSecondary" />
          </Link>
          <MovieCardContainer id={680} />
        </ContentWrapper>
      </Header>
      <main>
        <GenresInfoContainer />
        <ContentWrapper>
          <MoviesByGenreContainer />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
