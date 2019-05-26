import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import ConnectedMoviesByGenreContainer from '../components/MoviesByGenreContainer/MoviesByGenreContainer';
import { Logo } from '../../components/Logo/Logo';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import ConnectedMovieCardContainer from '../components/MovieCardContainer/MovieCardContainer';
import ConnectedGenresInfoContainer from '../components/GenresInfoContainer/GenresInfoContainer';

const MoviePage = () => {
  return (
    <Fragment>
      <Header>
        <Logo />
        <Link to="/">
          <SearchBtn className="searchBtnSecondary" />
        </Link>
        <ConnectedMovieCardContainer />
      </Header>
      <main>
        <ConnectedGenresInfoContainer />
        <ContentWrapper>
          <ConnectedMoviesByGenreContainer />
        </ContentWrapper>
      </main>
    </Fragment>
  );
};

export default MoviePage;
