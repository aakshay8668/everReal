import * as faker from 'faker';

context('Positive and Negative testcases', () => {

  const fname = faker.lorem.word();
  const lname = faker.lorem.word();

  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  })

  it('Verify Household Informtion with valid details', () => {

    cy.get('span.MuiIconButton-label>span').click()
    cy.contains('Deutsch').click()
    cy.contains('English').click()
    // Required to reload page as api does not hit when language change detected
    cy.reload()
    cy.contains('Rental Application')

    cy.get('div#mui-component-select-noOfAdultsMovingIn').click()
    cy.get('li[data-value="1"]').click()

    cy.get('div#mui-component-select-noOfChildrenMovingIn').click()
    cy.get('li[data-value="1"]').click()

    cy.get('input[placeholder="First name"]').type(fname)
    cy.get('input[placeholder="Last name"]').type(lname)

    cy.contains(fname)

    cy.get('button[type="submit"]').click()
    //Validated again as detail should be visible when submit page
    cy.contains(fname)
  })


  //Negative testcase with blank mandatory detail
  it('Verify Household Informtion with blank First Name', () => {
    cy.get('span.MuiIconButton-label>span').click()
    cy.contains('Deutsch').click()
    cy.contains('English').click()
    cy.reload()
    cy.contains('Rental Application')

    cy.get('div#mui-component-select-noOfAdultsMovingIn').click()
    cy.get('li[data-value="1"]').click()

    cy.get('div#mui-component-select-noOfChildrenMovingIn').click()
    cy.get('li[data-value="1"]').click()
    cy.get('input[placeholder="Last name"]').type(lname)

    cy.get('button[type="submit"]').click()
    
    // Error validations
    cy.get('p[id="applications[0].applicationFormData.firstName-helper-text"]').should('be.visible')
  
  })
})