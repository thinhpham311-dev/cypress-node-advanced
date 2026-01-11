describe('Slick Slider UI', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders slick slider correctly', () => {
    cy.get('.slick-list').should('be.visible');
    cy.get('.slick-track').should('exist');
    cy.get('.slick-slide').should('have.length.at.least', 1);
  });

  it('has an active slide', () => {
    cy.get('.slick-slide.slick-active')
      .should('be.visible');
  });

  it('moves to next slide when clicking next button', () => {
    cy.get('.slick-slide.slick-active')
      .first()
      .invoke('text')
      .then((beforeText) => {
        cy.get('.slick-next').click();

        cy.get('.slick-slide.slick-active')
          .first()
          .invoke('text')
          .should('not.eq', beforeText);
      });
  });

  it('moves to previous slide when clicking prev button', () => {
    cy.get('.slick-next').click();

    cy.get('.slick-slide.slick-active')
      .first()
      .invoke('text')
      .then((afterNext) => {
        cy.get('.slick-prev').click();

        cy.get('.slick-slide.slick-active')
          .first()
          .invoke('text')
          .should('not.eq', afterNext);
      });
  });

  it('updates transform when sliding', () => {
    cy.get('.slick-track')
      .invoke('css', 'transform')
      .then((beforeTransform) => {
        cy.get('.slick-next').click();

        cy.get('.slick-track')
          .invoke('css', 'transform')
          .should('not.eq', beforeTransform);
      });
  });

  it('shows correct content in active slide', () => {
    cy.get('.slick-slide.slick-active')
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty');
  });

  
});

