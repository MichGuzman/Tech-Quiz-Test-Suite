import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz.tsx';

describe('Quiz Component Test', () => {
  it('renders the start button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });
});
