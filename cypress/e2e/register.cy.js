describe('Register page e2e testing',function(){
    beforeEach(function(){
        cy.fixture('user').then((user)=>{
            this.userData=user;
        })
    })
    it('Testing registerpage found',function(){
        cy.visit('/register')
        cy.get('h1').should('contain','Register Here!')
        cy.get('input[name="name"]').type(this.userData.name)
        cy.get('input[name="email"]').type(this.userData.email)
        cy.get('input[name="password"]').type(this.userData.password)
        cy.get('button[type="submit"]').click({multiple:true})
        cy.contains("User Registered Successfully!").should('be.visible')
        cy.log('register functionality working')
    })
})