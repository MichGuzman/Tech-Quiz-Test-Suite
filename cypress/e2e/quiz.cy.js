describe('Tech Quiz App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('starts the quiz when Start is clicked', () => {
    cy.contains('Start Quiz').click();
    cy.get('.question').should('exist');
  });

  it('completes the quiz and shows score', () => {
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('.option').first().click();
    }

    cy.contains('Your score').should('exist');
  });
});
