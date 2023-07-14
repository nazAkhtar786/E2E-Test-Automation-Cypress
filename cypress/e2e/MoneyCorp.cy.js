describe('MoneyCorp Automation', () => {
 beforeEach(() => {
  cy.visit("https://www.moneycorp.com/en-gb/");
 })
  it('Open the moneycorp application and veryfying the page URL', () => {
     cy.url().should('eq', 'https://www.moneycorp.com/en-gb/');
  })
  it('changed the language & region from the top right corner to USA & veryfying the page url', () => {
      cy.get('#language-dropdown-flag > span > img').click();
        cy.get('.nav-inner > ul > :nth-child(9) > a').contains('USA English').click();
        cy.url().should('eq', 'https://www.moneycorp.com/en-us/');
  })
  it('clicked business and then clicked the foreign exchange & veryfying the page url', () => {  
      cy.get('.c-hamburger__inner').click()
      const Business= cy.get(':nth-child(1) > .hover-trigger > .section-header > .ignoreScrollEvents').trigger('mouseover')
      Business.click();
      const HelpSupportLink= cy.get('.open > .hover-trigger > #mega-nav-1 > .nav-inner-container > .nav-inner > :nth-child(1) > :nth-child(2) > .category-header > a').trigger('mouseover')
      HelpSupportLink.click();
      const ForeighExchangeLink = cy.get('.open > :nth-child(3) > a').trigger('mouseover')
      ForeighExchangeLink.click();
      cy.title().should('eq', 'FX Orders: Stop Loss Orders & Limit Orders | Moneycorp')
  })
  it('searched for the word international payment using the searchbox & veryfying the result page', () => { 
 const Business1= cy.get('.c-hamburger__inner').trigger('mouseover')
      Business1.click();
      cy.get('.nav-search-bar > .c-header__search').type('international payment');
      cy.get('.nav-search-bar > .c-header__search > form > [type="submit"]').click();
     cy.url().should('eq', 'https://www.moneycorp.com/en-gb/search/?q=international+payment');
})
    it('validating a link', () => {
    cy.url().should('eq', 'https://www.moneycorp.com/en-us/')
})
})
