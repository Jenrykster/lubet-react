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

    cy.intercept('POST', '**/user/create').as('postUser');

    cy.get('[data-cy=sign-up-btn]').click();

    cy.wait('@postUser').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
      expect(xhr.response.body).has.property('user');
      expect(xhr.response.body.user).is.not.null;
      expect(xhr.response.body).has.property('token');
      expect(xhr.response.body.token.token).is.not.null;
    });
  });

  it('Logins an user', () => {
    cy.login('test@email.com', '123456');
  });

  it('Logouts an user', () => {
    cy.login('test@email.com', '123456');
    cy.get('.swal2-confirm').click();
    cy.get('[data-cy=logout-btn]').click();
    cy.visit('http://localhost:3000/games');
    cy.location().should((location) => {
      expect(location.pathname).be.eq('/');
    });
  });

  it('Resets a password', () => {
    cy.visit('http://localhost:3000/reset');
    cy.get('[data-cy=email]').focus().type('test@email.com');

    cy.intercept('POST', '**/reset').as('postPasswordReset');

    cy.get('[data-cy=send-link-btn]').click();

    cy.wait('@postPasswordReset').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
      expect(xhr.response.body).has.property('email');
      expect(xhr.response.body.user).is.not.null;
      expect(xhr.response.body).has.property('id');
      expect(xhr.response.body.id).is.not.null;
      expect(xhr.response.body).has.property('token');
      expect(xhr.response.body.token).is.not.null;
    });
  });

  it.skip('Completes the cart with random games', () => {
    cy.login('test@email.com', '123456');
    cy.get('.swal2-confirm').click();

    cy.get('[data-cy=new-bet-btn]').click();

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
  it.skip('Filters the bets', () => {
    cy.login('test@email.com', '123456');
    cy.get('.swal2-confirm').click();
    cy.intercept('GET', '**/bet/all-bets?**').as('filterBets');
    for (let i = 0; i < Cypress.env('gameTypes').length; i++) {
      cy.get('[data-cy=game-selector-btn').eq(i).click();
      cy.wait('@filterBets').then((xhr) => {
        cy.get('[data-cy=game-type-label]').each(($gameLabel) => {
          cy.wrap($gameLabel).contains(Cypress.env('gameTypes')[i].type);
        });
      });
      cy.get('[data-cy=game-selector-btn').eq(i).click();
    }

    cy.intercept('GET', '**/bet/all-bets?**&**').as('filterBets');
    for (let i = 0; i < Cypress.env('gameTypes').length - 1; i++) {
      const games = [
        Cypress.env('gameTypes')[i].type,
        Cypress.env('gameTypes')[i + 1].type,
      ];
      const gamesRegex = new RegExp(`${games.join('|')}`, 'g');

      cy.get('[data-cy=game-selector-btn').eq(i).click();
      cy.get('[data-cy=game-selector-btn')
        .eq(i + 1)
        .click();

      cy.wait('@filterBets').then((xhr) => {
        cy.get('[data-cy=game-type-label]').each(($gameLabel) => {
          cy.wrap($gameLabel).invoke('text').should('match', gamesRegex);
        });
      });
      cy.get('[data-cy=game-selector-btn').eq(i).click();
      cy.get('[data-cy=game-selector-btn')
        .eq(i + 1)
        .click();
    }
    cy.get('[data-cy=game-type-label]').should('exist');
  });
});
