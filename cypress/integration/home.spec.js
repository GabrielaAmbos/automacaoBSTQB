describe('Test title', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('contains "BSTQB | Brazilian Software Testing Qualification Board" in the title', () =>{
        cy.title().should('contain','BSTQB | Brazilian Software Testing Qualification Board')
    } )
})
describe('Test main menu', () => {
    it('Visit homepage', () => {
        cy.visit('/')
    })
    it('Home', () => {
        cy.contains('Home').click()
    })
    it('Sobre nós', () => {
        cy.contains('Sobre nós').click()
    })
    it('Certificação', () => {
        cy.contains('Certificação').click()
    })
    it('Exame', () => {
        cy.contains('Exame').click()
    })
    it('Treinamento', () => {
        cy.contains('Treinamento').click()
    })
    it('Download', () => {
        cy.contains('Download').click()
    })
    it('Contato', () => {
        cy.contains('Contato').click()
    })
})
describe('Login do usuário', () => {
    it('visit to home', () => {
        cy.contains('Home').click()
    })
    it('Name user', () => {
        cy.get('#edit-name').type('sapphire')
    })
    it('Password', () => {
        cy.get('#edit-pass').type('Teste_2019')
    })
    it('Botão Entrar', () => {
        cy.get('.form-submit').click()
    })
})