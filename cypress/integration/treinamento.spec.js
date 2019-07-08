describe('Test title', () => {
    beforeEach(() => {
        cy.visit('/sobre-treinamento')
    })
    it('contains "Sobre Treinamento | BSTQB" in the title', () =>{
        cy.title().should('contain','Sobre Treinamento | BSTQB')
    } )
})
describe('Test topics', () => {
    it('Visit homepage', () => {
        cy.visit('/sobre-treinamento')
    })
    it('Sobre Treinamento', () => {
        cy.contains('Sobre Treinamento').click()
    })
    it('Como se credenciar', () => {
        cy.contains('Como se credenciar').click()
    })
    it('Materiais Credenciados', () => {
        cy.contains('Materiais Credenciados').click()
    })
    it('Provedores Credenciados', () => {
        cy.contains('Provedores Credenciados').click()
    })
    it('Solicitação de Exame', () => {
        cy.contains('Solicitação de Exame').click()
    })
})