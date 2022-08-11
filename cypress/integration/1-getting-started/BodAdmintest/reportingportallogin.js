/// <reference types="cypress" />


it('reporting portal login', function() {

    cy.visit('https://testapp.bodadmin.com/')
    cy.wait(2000)
    cy.get('#BA_AMP_LOGIN').click({force: true})
    cy.wait(2000)
    cy.get('#__BVID__24').type('FRC-00010',{force: true})
    cy.wait(2000)
    cy.get('#__BVID__26').type('sler3194VJ',{force: true})
    cy.wait(2000)
    cy.get('.btn').click({force: true})
    cy.wait(2000)
});    