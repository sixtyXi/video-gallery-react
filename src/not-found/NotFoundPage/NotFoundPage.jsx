import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper';
import { SearchBtn } from '../../components/SearchBtn/SearchBtn';
import { NotFoundMessage } from '../components/NotFoundMessage/NotFoundMessage';

const NotFoundPage = () => {
  return (
    <Fragment>
      <Header>
        <Logo />
        <Link to="/">
          <SearchBtn className="searchBtnSecondary" />
        </Link>
      </Header>
      <main>
        <ContentWrapper>
          <NotFoundMessage />
        </ContentWrapper>
      </main>
    </Fragment>
  );
};

export default NotFoundPage;
