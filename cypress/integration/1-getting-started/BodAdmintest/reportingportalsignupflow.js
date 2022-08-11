/// <reference types="cypress" />


it('reporting portal signup', function() {

    cy.visit('https://testapp.bodadmin.com/')
    cy.get('#BA_AMP_SIGN_UP').click({force: true})
    cy.get('#__BVID__32').type('bod limited',{force: true})
    cy.get('#__BVID__34').type('00091',{force: true})
    cy.get('#__BVID__36').type('bodltd@mailinator.com',{force: true})
    cy.get('#__BVID__38').type('bod',{force: true})
    cy.get('#__BVID__40').type('sec',{force: true})
    cy.get('#__BVID__42__BV_toggle_ > .row').click({force: true})
    cy.get(':nth-child(1) > .dropdown-item > .py-3').click({force: true})
    cy.get('#__BVID__74').type('bodsec@mailinator.com',{force: true})
    cy.get('#__BVID__76').type('07034851234',{force: true})
    cy.get('input[type="checkbox"]').check({force: true})
    cy.get('.mt-2 > .btn').click({force: true})






});
