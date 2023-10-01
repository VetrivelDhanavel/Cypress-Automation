const qmachSelectors = require('../plugins/selectors/qmach.selectors');
 
describe('Test', () => {
  it('passes', () => {
    cy.visit('https://staging.qmach.in/')
    cy.get(qmachSelectors.email)
      .type('sukhpreet+staging@quotemachine.com')
    cy.get(qmachSelectors.password)
      .type('Sukhi@1qaz1qaz!') 
    cy.get(qmachSelectors.signInButton).click();
    cy.get(qmachSelectors.welcomeMessage)
    .should('be.visible') 
    .should('have.text', "Hi Sukhpreet Singh, here's what's new.");
    cy.get(qmachSelectors.contactButton).click();
    cy.get(qmachSelectors.newContactButton).click();
    cy.wait(1000);
    cy.get('#dropDownTitle').select('Mr');
    cy.get('#dropDownTitle').should('have.value', 'Mr');
    cy.get(qmachSelectors.firstName)
      .type('first_name')
    cy.wait(1000);
    cy.get(qmachSelectors.lastName)
      .type('last_name')
    cy.get(qmachSelectors.saveButton).click();
    cy.get(qmachSelectors.invoice).click();
    cy.get(qmachSelectors.createNewInvoice).click();
    cy.get(qmachSelectors.createInvoice).click();
    cy.get(qmachSelectors.addProduct).click();
    cy.get(qmachSelectors.add).click();
    cy.get(qmachSelectors.addButton).click();
    cy.get(qmachSelectors.markAsDone).click();
    cy.get(qmachSelectors.receivePayment).click();
    cy.get(qmachSelectors.cardHolderName).scrollIntoView();
    cy.get(qmachSelectors.cardHolderName).type('QA');
  
  })
})