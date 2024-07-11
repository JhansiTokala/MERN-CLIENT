describe('Open homePage',()=>{
    it('OpenHomePage',()=>{
     cy.visit('/')
     cy.contains('Welcome')
    })
})