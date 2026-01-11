describe('Login Page E2E', () => {
  beforeEach(() => {
    cy.visit('/login'); // URL của trang login
  });

  it('should display login form', () => {
    cy.get('form').should('be.visible');
    cy.get('input[name=username]').should('exist');
    cy.get('input[name=password]').should('exist');
    cy.get('button[type=submit]').should('contain', 'Login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('input[name=username]').type('testuser');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();

    // Kiểm tra chuyển hướng sau login
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, testuser').should('be.visible');
  });
});
