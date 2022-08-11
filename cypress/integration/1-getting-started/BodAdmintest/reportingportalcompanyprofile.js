/// <reference types="cypress" />


it('reporting portal login', function() {

    cy.visit('https://testapp.bodadmin.com/')
    cy.get('#BA_AMP_LOGIN').click({force: true})
    cy.get('#__BVID__24').type('FRC-00010',{force: true})
    cy.get('#__BVID__26').type('sler3194VJ',{force: true})
    cy.get('.btn').click({force: true})
    cy.contains("Complete Company Profile").click({force: true})
    //cy.get('.profile-info-action > .btn').click({force: true})
    //cy.get('.align-items-end > .btn').type('1/1/2021',{force: true})
    //cy.get('#__BVID__202').type('https://www.doveltd.com',{force: true})
    //cy.get('#BVID204').type('Lagos Island',{force: true})
    //cy.get('#BVID206').type('information technology',{force: true})
    //cy.get('#BVID208BVtoggle').click({force: true})
    //cy.get('#BVID208 > .dropdown-menu > :nth-child(1) > .dropdown-item > .py-3').click({force: true})
    //cy.get('#BVID240BVtoggle > .row').click({force: true})
    //cy.get('#BVID240 > .dropdown-menu > :nth-child(5) > .dropdown-item > .py-3').click({force: true})
    //cy.get('.align-items-end > .btn').click({force: true})

});

