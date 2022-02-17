// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*eslint-disable*/

Cypress.Commands.add('login', (email, password) => {
  cy.intercept('POST', '**/login').as('postUser');
  cy.intercept('GET', '**/cart_games').as('getGamesData');

  cy.visit('http://localhost:3000/');

  cy.get('[data-cy=email]').focus().type(email);

  cy.get('[data-cy=password]').focus().type(password);

  cy.get('[data-cy=login-btn]').click();

  cy.wait('@postUser').then((xhr) => {
    expect(xhr.response.statusCode).be.eq(200);
    expect(xhr.response.body).has.property('user');
    expect(xhr.response.body.user).is.not.null;
    expect(xhr.response.body).has.property('token');
    expect(xhr.response.body.token.token).is.not.null;
  });

  cy.wait('@getGamesData').then((xhr) => {
    expect(xhr.response.statusCode).be.eq(200);
    expect(xhr.response.body).has.property('types');
    expect(xhr.response.body.types).is.not.null;
    expect(xhr.response.body).has.property('min_cart_value');
    expect(xhr.response.body['min_cart_value']).is.not.null;

    Cypress.env('gameTypes', xhr.response.body.types);
    Cypress.env('minCartValue', xhr.response.body['min_cart_value']);
  });
});
