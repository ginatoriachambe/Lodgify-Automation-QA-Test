import pricingPage from '../pages/PricingPage.js'

describe('Lodgify Pricing', () =>{

    beforeEach(() => {

        pricingPage.go()
    })

    it('Verify Yearly Plan with 50 rentals', () => {
        pricingPage.fillForm('5'0)
        
    });
})