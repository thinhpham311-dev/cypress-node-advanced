it('my first test', () => {
    cy.visit('/movie');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/movie/1368166"] > .movie-card').click();
    cy.get(':nth-child(2) > .casts__item__img > .lazy-load-image-background > img').click();
    cy.get('.header__toggle > button > .bx').click();
    cy.get('.header__nav > :nth-child(2) > a').click();
    cy.get('.page-header').click();
    cy.get('h2').click();
    /* ==== End Cypress Studio ==== */
});

it('create new list and add movie to the list', () => {
    cy.visit('/movie/94605');
    cy.get('.header__toggle').click();
    cy.contains('Home').click();
    cy.scrollTo(0, 1000);
});