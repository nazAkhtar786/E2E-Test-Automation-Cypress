import loginPage from '../support/PageObject/MoneyCorp'

describe('MoneyCorp Automation', () => {
 beforeEach(() => {
     cy.visit("https://www.moneycorp.com/en-gb/");
 })
  it('Open the moneycorp application and veryfying the page URL', () => {
     cy.url().should('eq', 'https://www.moneycorp.com/en-gb/');
  })
  it('changed the language & region from the top right corner to USA & veryfying the page url', () => {
     const loginObj = new loginPage();
     loginObj.changeLanguage();
     loginObj.verifyLanguageChanged();
     cy.url().should('eq', 'https://www.moneycorp.com/en-us/');
  })
  it('clicked business and then clicked the foreign exchange & veryfying the page url', () => {  
     const loginObj = new loginPage();
     loginObj.clickThreeDotIcon()
     const Business= cy.get(':nth-child(1) > .hover-trigger > .section-header > .ignoreScrollEvents').trigger('mouseover')
     Business.click()
     const HelpSupportLink= cy.get('.open > .hover-trigger > #mega-nav-1 > .nav-inner-container > .nav-inner > :nth-child(1) > :nth-child(2) > .category-header > a').trigger('mouseover')
      HelpSupportLink.click()
     const ForeighExchangeLink = cy.get('.open > :nth-child(3) > a').trigger('mouseover')
     ForeighExchangeLink.click()
      cy.title().should('eq', 'FX Orders: Stop Loss Orders & Limit Orders | Moneycorp')
  })
  it('searched for the word international payment using the searchbox & veryfying the result page', () => { 
     const loginObj = new loginPage();
     const Business1= cy.get('.c-hamburger__inner').trigger('mouseover')
      Business1.click();
      loginObj.typeInternationalPayment()
      loginObj.clickSearchButton()
      cy.url().should('eq', 'https://www.moneycorp.com/en-gb/search/?q=international+payment');
})
    it('validating a link', () => {
     cy.get('.c-header__logo > a > img').click()
     cy.url().should('eq', 'https://www.moneycorp.com/en-gb/')
})
})
