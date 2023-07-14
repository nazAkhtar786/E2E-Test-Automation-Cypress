class loginPage{

    elements = { 
         languageRegion : () => cy.get('#language-dropdown-flag > span > img'),      
         languageValidation : () => cy.get('.nav-inner > ul > :nth-child(9) > a'),    
         businessLink : () => cy.get(':nth-child(1) > .hover-trigger > .section-header > .ignoreScrollEvents'),
         helpSupportLink : () => cy.get('.open > .hover-trigger > #mega-nav-1 > .nav-inner-container > .nav-inner >'),
         ForeighExchangeLink : () => cy.get('.open > :nth-child(3) > a'),
         mouseHoverBusiness : () => cy.get('.c-hamburger__inner'),
         searchInternationalPayment : () => cy.get('.nav-search-bar > .c-header__search'),
         SearchButton : () => cy.get('.nav-search-bar > .c-header__search > form > [type="submit"]'),
     }
     changeLanguage()
     {
         this.elements.languageRegion().click()
    }
    verifyLanguageChanged()
    {
        this.elements.languageValidation().click()
    }
    clickThreeDotIcon()
    {
        this.elements.mouseHoverBusiness().click()
    }
    clickBusiness()
    {
        this.elements.businessLink().click()
    }
    clickHelpSupport()
    {
        this.elements.helpSupportLink().click()
    }
    clickForeignExchange()
    {
        this.elements.ForeighExchangeLink().click()
    }
    typeInternationalPayment()
    {
        this.elements.searchInternationalPayment().type('international payment')
    }
    clickSearchButton()
    {
        this.elements.SearchButton().click()
}
}
  
  export default loginPage;