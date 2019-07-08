describe('Test title', () => {
    beforeEach(() => {
        cy.visit('/sobre-certificacao')
    })
    it('contains "Sobre as Certificações | BSTQB" in the title', () =>{
        cy.title().should('contain','Sobre as Certificações | BSTQB')
    } )
})
describe('Test topics', () => {
    it('Visit homepage', () => {
        cy.visit('/sobre-certificacao')
    })
    describe('Cerficação', () => {
        it('Sobre as Certificações', () => {
            cy.contains('Sobre as Certificações').click()
        })
        it('Portfólio', () => {
            cy.contains('Portfólio').click()
        })
        it('Benefícios', () => {
            cy.contains('Benefícios').click()
        })
        it('Diferenciais', () => {
            cy.contains('Diferenciais').click()
        })
        it('Syllabus', () => {
            cy.contains('Syllabus').click()
        })
        //it('Verificador de Certificado', () => {
           // cy.contains('Verificador de Certificado').click()
        //})
    })
    describe('Nível Fundamental', () => {
        it('Sobre o Nível', () => {
            cy.contains('Sobre o Nível').click()
        })
        it('CTFL', () => {
            cy.contains('CTFL').click()
        })
        it('CTFL-AT', () => {
            cy.contains('CTFL-AT').click()
        })
        it('CTFL-MBT', () => {
            cy.contains('CTFL-MBT').click()
        })
        it('CTFL-PT', () => {
            cy.contains('CTFL-PT').click()
        })
    })
    describe('Nível Avançado', () => {
        it('Sobre o Nível', () =>{
             cy.get('#first leaf').click()
        })
        it('Qualificação CTAL', () => {
            cy.contains('Qualificação CTAL').click()
        })
        it('CTAL-TM', () => {
            cy.contains('CTAL-TM').click()
        })
        it('CTAL-TA', () => {
            cy.contains('CTAL-TA').click()
        })
        it('CTAL-ST', () => {
            cy.contains('CTAL-ST').click()
        })
        it('CTAL-TAE', () => {
            cy.contains('CTAL-TAE').click()
        })
        it('CTAL-TTA', () => {
            cy.contains('CTAL-TTA').click()
        })
    })
})