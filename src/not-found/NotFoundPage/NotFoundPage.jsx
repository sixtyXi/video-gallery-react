import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Logo } from '../../components/Logo/Logo';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';
import { NotFoundMessage } from '../components/NotFoundMessage/NotFoundMessage';

export const NotFoundPage = () => {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <Logo />
          <Link to="/">
            <SearchBtn className="searchBtnSecondary" />
          </Link>
        </ContentWrapper>
      </Header>
      <main>
        <ContentWrapper>
          <NotFoundMessage />
        </ContentWrapper>
      </main>
      <Footer />
    </Fragment>
  );
};
