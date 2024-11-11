describe('Amazon',() => {
    
    it('Caso de teste: Login errado Amazon',()=>{
        cy.visit('https://www.amazon.com.br')
        cy.get('#nav-link-accountList > .nav-line-2').click()
        cy.get('#ap_email').type('25222453145')
        cy.get('.a-button-inner > #continue').click()
        cy.get('.a-alert-heading').should('contain.text', 'Número de telefone incorreto')
    })

    it('Caso de teste: Escolhendo CEP',() => {
        cy.visit('https://www.amazon.com.br')
        cy.get('#glow-ingress-line2').click()
        cy.get('#GLUXZipUpdateInput_0').type('37540')
        cy.get('#GLUXZipUpdateInput_1').type('000')
        cy.get('#GLUXZipUpdate').click()
        cy.get('#glow-ingress-line2').should('contain.text', '37540000')  
    })

    it('Caso de teste: Selecionando departamento',() => {
        cy.visit('https://www.amazon.com.br')
        cy.get('#twotabsearchtextbox').type('Acessorios')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state').should('contain.text','Acessorios')
    })

    it('Caso de teste: Selecionando departamento',() => {
        cy.visit('https://www.amazon.com.br')
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click()
        cy.get('#zg_banner_text').should('contain.text','Mais vendidos') 
    })

    it('Caso de teste: Adicionar Produto no Carrinho', () => {
        cy.visit('https://www.amazon.com.br/ACER-Notebook-AN515-57-52LC-Windows11-vermelho/dp/B0B7KC3QSB/ref=sr_1_5?crid=1CKXGOXQA1JPM&keywords=acer%2Bnitro%2B5&qid=1699895247&sprefix=acer%2Bnitro%2B5%2Caps%2C277&sr=8-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&th=1')
        cy.get('#add-to-cart-button').click()
        cy.get('#attachSiNoCoverage').click()
        cy.get('.a-size-medium-plus').should('contain.text', 'Adicionado ao carrinho');
    })

    it('Caso teste: Verificando carrinho de compras',()=>{
        cy.visit('https://www.amazon.com.br')
        cy.get('#nav-cart').click()
        cy.get('.a-truncate-cut').should('contain.text', 'ACER Notebook Gamer Nitro 5')
    })
        
})