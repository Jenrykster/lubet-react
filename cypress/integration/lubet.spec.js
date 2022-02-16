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
  it.skip('Creates an user', () => {
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

  it.skip('Logins an user', () => {
    cy.login('test@email.com', '123456');
  });

  it.skip('Logouts an user', () => {
    cy.login('test@email.com', '123456');
    cy.get('.swal2-confirm').click();
    cy.get('[data-cy=logout-btn]').click();
    cy.visit('http://localhost:3000/games');
    cy.location().should((location) => {
      expect(location.pathname).be.eq('/');
    });
  });

  it.skip('Resets a password', () => {
    cy.visit('http://localhost:3000/reset');
    cy.get('[data-cy=email]').focus().type('test@email.com');

    cy.server();
    cy.route('POST', '**/reset').as('postPasswordReset');

    cy.get('[data-cy=send-link-btn]').click();

    cy.wait('@postPasswordReset').then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property('email');
      expect(xhr.response.body.user).is.not.null;
      expect(xhr.response.body).has.property('id');
      expect(xhr.response.body.id).is.not.null;
      expect(xhr.response.body).has.property('token');
      expect(xhr.response.body.token).is.not.null;
    });
  });

  it('Completes the cart with random games', () => {
    cy.server();
    cy.route('GET', '**/cart_games').as('getGamesData');
    cy.login('test@email.com', '123456');
    cy.get('.swal2-confirm').click();

    cy.get('[data-cy=new-bet-btn]').click();

    cy.wait('@getGamesData').then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property('types');
      expect(xhr.response.body.types).is.not.null;
      expect(xhr.response.body).has.property('min_cart_value');
      expect(xhr.response.body['min_cart_value']).is.not.null;

      Cypress.env('gameTypes', xhr.response.body.types);
      Cypress.env('minCartValue', xhr.response.body['min_cart_value']);
    });

    const MIN_CART_VALUE = Cypress.env('minCartValue');
    const NUMBER_OF_GAMES = Cypress.env('gameTypes').length;
    let cartValue = 0;

    const addRandomGamesToCart = () => {
      cy.get('[data-cy=curr-cart-value]')
        .invoke('text')
        .then((cartText) => {
          cartValue = parseValue(cartText);
          if (cartValue < MIN_CART_VALUE) {
            cy.get('[data-cy=game-selector-btn')
              .eq(parseInt(Math.random() * NUMBER_OF_GAMES))
              .click();
            cy.get('[data-cy=complete-game-btn]').click();
            cy.get('[data-cy=add-to-cart-btn]').click();
            addRandomGamesToCart();
          } else {
            cy.get('[data-cy=save-btn]').click();
          }
        });
    };

    const parseValue = (val) => {
      return parseFloat(val.slice(3, -1));
    };

    addRandomGamesToCart();
  });
});
