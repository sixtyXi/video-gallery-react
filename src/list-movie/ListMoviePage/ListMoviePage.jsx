import React, { Fragment } from 'react';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import ConnectedMovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import ConnectedSearchContainer from '../components/SearchContainer/SearchContainer';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import ConnectedSummaryListMovieContainer from '../components/SummaryListMovieContainer/SummaryListMovieContainer';

export const ListMoviePage = () => {
  return (
    <Fragment>
      <Header>
        <Logo />
        <ConnectedSearchContainer />
      </Header>
      <main>
        <ConnectedSummaryListMovieContainer />
        <ContentWrapper>
          <ConnectedMovieListContainer />
        </ContentWrapper>
      </main>
    </Fragment>
  );
};
