class PricingPage{

    go(){
        
        cy.visit('/pricing.html')
        cy.title().should('eq', 'Lodgify Pricing | Affordable Vacation Rental Software From $11')
    }

    fillForm(rentals){
        cy.get('input[id="scroll-prop-plan"]').invoke('attr', 'value', rentals)
    }

    
}

export default new PricingPage;