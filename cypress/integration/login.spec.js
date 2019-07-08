describe('Login do usuário', () => {
    it('visit to home', () => {
        cy.visit('/user')
    })
    it('Name user', () => {
        cy.get('#edit-name').type('usuariofalha')
    })
    it('Password', () => {
        cy.get('#edit-pass').type('Teste_2019')
    })
    it('Botão Entrar', () => {
        cy.get('.form-submit').click()
    })
})
describe('Opções do usuário', () => {
    describe('Guias do usuário', () => {
        it('Editar', () => {
            cy.contains('Editar').click()
        })
        it('Meus resultados', () => {
            cy.contains('Meus resultados').click()
        })

    })
    
})