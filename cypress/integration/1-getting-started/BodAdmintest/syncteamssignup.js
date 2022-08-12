/// <reference types="cypress" />


it('syncteam company signup flow', function() {

    cy.visit('https://syncteams.netlify.app/')
    cy.wait(2000)
    cy.get('[href="/register"] > .ant-btn').click()
    cy.get('#email').type('koders@mailinator.com')
    cy.get('#companyName').type('Koders limited')
    cy.get('#firstname').type('Koders')
    cy.get('#lastname').type('kode')
    cy.get('#password').type('Password1!')
    cy.get('.passwordText').click()
    cy.get('.passwordText').click()
    cy.get('.ant-form-item-control-input-content > .ant-btn').click()
    cy.get('#teamName').type('KODERS TEAM')
    //cy.get('#BA_AMP_LOGIN').click({force: true})
    //cy.wait(2000)
    //cy.get('#__BVID__24').type('FRC-00010',{force: true})
    //cy.wait(2000)
    //cy.get('#__BVID__26').type('sler3194VJ',{force: true})
    //cy.wait(2000)
    //cy.get('.btn').click({force: true})
    //cy.wait(2000)
});    