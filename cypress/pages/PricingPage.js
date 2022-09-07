class PricingPage{

    go(){
        
        cy.visit('/pricing.html')
        cy.title().should('eq', 'Lodgify Pricing | Affordable Vacation Rental Software From $11')
    }

    fillForm(rentals){
        cy.get('input[id="scroll-prop-plan"]').type('{backspace}' + rentals)
        cy.get('.btn-group.btn-group-lg.row.row-xs')
        .find('.col-md-4.col-xs-12.btn.active') 
        .contains('Yearly')
    }

    viewPlan(element, planType, price){
        
        cy.get(element).find('h6.plan-name').contains(planType).then(($item) => {
            cy.get($item.parent()).find('.plan-price.text-dark')
            .find('.total-sum').should('have.text', price).click()
        })
    }

    viewPlanStarter(){
        cy.get('.price-card-starter').then(($item) => {
            this.viewPlan($item , 'Starter', '64')    
        })
    }

    viewPlanPro(){

        cy.get('.price-card-pro').each((item, index) => {
            if(index == 0){
                this.viewPlan(Cypress.$(item) , 'Professional', '375')
            }else{
                this.viewPlan(Cypress.$(item) , 'Ultimate', '525')
            }
        })
    }

    viewCurrency_pre(currency, currencySymbol){

        cy.get('select.price-currency-select.form-control.input-sm.form-control-bord-round').select(currency)
        cy.get('.currency.currency-symbol.currency-symbol-pre').each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(currencySymbol)
        })

    }

    viewCurrency_post(currency, currencySymbol){

        cy.get('select.price-currency-select.form-control.input-sm.form-control-bord-round').select(currency)
        cy.get('.currency.currency-symbol.currency-symbol-post').each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(currencySymbol)
        })

    }


    
}

export default new PricingPage;