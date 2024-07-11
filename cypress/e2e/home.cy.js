//client/cypress/e2e/home.cy.js
describe('Home page test',()=>{
    it('check the input field',()=>{
        cy.visit('/');
        cy.get('input').type('Cinderella')
        cy.get('button').click()
        cy.contains('welcome,Cinderella');
    })
})