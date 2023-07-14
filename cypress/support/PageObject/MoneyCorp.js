class loginPage{

    elements = { 
         languageRegion : () => cy.get('#language-dropdown-flag > span > img'),      
         languageValidation : () => cy.get('.nav-inner > ul > :nth-child(9) > a'),    
         businessLink : () => cy.get(':nth-child(1) > .hover-trigger > .section-header > .ignoreScrollEvents'),
         helpSupportLink : () => cy.get('.open > .hover-trigger > #mega-nav-1 > .nav-inner-container > .nav-inner >'),
         ForeighExchangeLink : () => cy.get('.open > :nth-child(3) > a')
     }
  }
  
  export default loginPage;