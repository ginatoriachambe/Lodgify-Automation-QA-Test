import contactPage from '../pages/ContactPage.js'

describe('Lodgify Contact', () =>{

    beforeEach(function () {
        
        cy.fixture('contact').then((item) => {
            this.contact = item
        })
        contactPage.go()
        
    })

    it('Test_003 - Verify the field name validation', function(){
        contactPage.fillForm_without_name(this.contact.contactDetails)
        contactPage.submit()
        contactPage.alertMessageShoulBe("Name is mandatory")
    });

    it('Test_004 - Verify the field phone number validation', function(){
        contactPage.fillForm_without_phone(this.contact.contactDetails)
        contactPage.submit()
        contactPage.alertErrorMessageShoulBe("Phone number is mandatory")
    });

    it('Test_005 - Verify the field email validation', function(){
        contactPage.fillForm_without_email(this.contact.contactDetails)
        contactPage.submit()
        contactPage.alertMessageShoulBe("Email is mandatory")
    });

    it('Test_006 - Verify the field comment validation', function(){
        contactPage.fillForm_without_comment(this.contact.contactDetails)
        contactPage.submit()
        contactPage.alertMessageShoulBe("Comment is mandatory")
    });

    it('Test_007 - Verify past arrival and departure', function(){
        contactPage.fillForm_past_dates()
    });

})