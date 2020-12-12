import React from 'react';
import GameBoard from './GameBoard';
import { Section, TitleText } from './LayoutStyles';
import GameLog from './GameLog';

function App() {
  return (
    <>
      <Section>
        <TitleText>Tic Tac Toe</TitleText>
      </Section>
      <Section>
        <GameBoard />
      </Section>
      <Section>
        <GameLog />
      </Section>
    </>
  );
}

export default App;
