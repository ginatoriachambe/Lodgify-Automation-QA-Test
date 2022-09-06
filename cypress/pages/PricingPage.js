class PricingPage{

    go(){
        
        cy.visit('/pricing.html')
        cy.title().should('eq', 'Lodgify Pricing | Affordable Vacation Rental Software From $11')
    }

    fillForm(rentals){
        cy.get('input[id="scroll-prop-plan"]').type('{backspace}' + rentals)  
    }

    viewPlan(element, planType, price){
        cy.get(element).find('h6.plan-name').contains(planType).then(($item) => {
            cy.get($item.parent()).find('.plan-price.text-dark')
            .find('.total-sum').should('have.text', price)
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

    
}

export default new PricingPage;