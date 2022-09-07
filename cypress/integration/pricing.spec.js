import pricingPage from '../pages/PricingPage.js'

describe('Lodgify Pricing', () =>{

    beforeEach(() => {

        pricingPage.go()
    })

    it('Test_001 - Verify Yearly Plan with 50 rentals', () => {
        pricingPage.fillForm('50')
        pricingPage.viewPlanStarter()
        pricingPage.viewPlanPro()
        
    });

    it('Test_002 - Verify the change of currency', () => {
        pricingPage.viewCurrency_pre('£ GBP', '£')
        pricingPage.viewCurrency_post('€ EUR', '€')
        pricingPage.viewCurrency_pre('$ USD', '$')
        
    });
})