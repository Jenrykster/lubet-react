/* eslint-disable */
/// <reference types="cypress"/>

function generateEmail(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + '@email.com';
}

describe('Lubet test', () => {
  it('Creates an user', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('[data-cy=name]').focus().type('Nome de Alguém');
    cy.get('[data-cy=email]').focus().type(generateEmail(6));

    cy.get('[data-cy=password]').focus().type('123456');

    cy.server();
    cy.route('POST', '**/user/create').as('postUser');

    cy.get('[data-cy=sign-up-btn]').click();

    cy.wait('@postUser').then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property('user');
      expect(xhr.response.body.user).is.not.null;
      expect(xhr.response.body).has.property('token');
      expect(xhr.response.body.token.token).is.not.null;
    });
  });
});
