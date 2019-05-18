import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import '../src/App.scss';
import { MOVIES } from '../src/shared/moviesMock';

import { Header } from '../src/components/Header/Header';
import { Logo } from '../src/components/Logo/Logo';
import { SearchField } from '../src/list-movie/components/SearchField/SearchField';
import { SearchBtn } from '../src/components/SearchBtn/SearchBtn';
import { Footer } from '../src/components/Footer/Footer';
import { MovieThumb } from '../src/components/MovieThumb/MovieThumb';
import { MovieCard } from '../src/movie/components/MovieCard/MovieCard';
import { ContentWrapper } from '../src/components/ContentWrapper/ContentWrapper';

const backgroundDark = { name: 'dark', value: '#000000', default: true };

storiesOf('Header', module).add('Default', () => <Header />);

storiesOf('Logo', module).add('Default', () => <Logo />);

storiesOf('SearchField', module).add('Default', () => (
  <ContentWrapper>
    <SearchField />
  </ContentWrapper>
));

storiesOf('SearchBtn', module)
  .addParameters({
    backgrounds: [backgroundDark]
  })
  .add('BtnPrimary', () => <SearchBtn />)
  .add('BtnSecondary', () => <SearchBtn className="searchBtnSecondary" />);

storiesOf('Footer', module).add('Default', () => <Footer />);

storiesOf('MovieThumb', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Default', () => <MovieThumb movie={MOVIES[0]} />);

storiesOf('MovieCard', module)
  .addParameters({
    backgrounds: [backgroundDark]
  })
  .add('Default', () => (
    <ContentWrapper>
      <MovieCard movie={MOVIES[0]} />
    </ContentWrapper>
  ));
