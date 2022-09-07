class ContactPage{

    go(){
        
        cy.visit('/contact.html')
        cy.title().should('eq', 'Contact')
    }

    fillForm_without_name(contact){
        cy.get('select[name="phoneCountry"').select(contact.phoneCountry)
        cy.get('input[name="phone"]').type(contact.phoneNumber)
        cy.get('input[name="email"]').type(contact.email)
        cy.get('input[name="guests"]').type(contact.guestNumber)
        cy.get('button.DateRangePickerInput_calendarIcon.DateRangePickerInput_calendarIcon_1').click()
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Arrival"]').type("15/12/2022")
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Departure"]').type("20/12/2022")
        cy.get('textarea[placeholder="Comment"]').type(contact.comment)
    }

    fillForm_without_phone(contact){
        cy.get('input[name="name"]').type(contact.name)
        cy.get('input[name="email"]').type(contact.email)
        cy.get('input[name="guests"]').type(contact.guestNumber)
        cy.get('button.DateRangePickerInput_calendarIcon.DateRangePickerInput_calendarIcon_1').click()
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Arrival"]').type("15/12/2022")
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Departure"]').type("20/12/2022")
        cy.get('textarea[placeholder="Comment"]').type(contact.comment)
    }

    fillForm_without_email(contact){
        cy.get('input[name="name"]').type(contact.name)
        cy.get('select[name="phoneCountry"').select(contact.phoneCountry)
        cy.get('input[name="phone"]').type(contact.phoneNumber)
        cy.get('input[name="guests"]').type(contact.guestNumber)
        cy.get('button.DateRangePickerInput_calendarIcon.DateRangePickerInput_calendarIcon_1').click()
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Arrival"]').type("15/12/2022")
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Departure"]').type("20/12/2022")
        cy.get('textarea[placeholder="Comment"]').type(contact.comment)
    }

    fillForm_without_comment(contact){
        cy.get('input[name="name"]').type(contact.name)
        cy.get('select[name="phoneCountry"').select(contact.phoneCountry)
        cy.get('input[name="phone"]').type(contact.phoneNumber)
        cy.get('input[name="email"]').type(contact.email)
        cy.get('input[name="guests"]').type(contact.guestNumber)
        cy.get('button.DateRangePickerInput_calendarIcon.DateRangePickerInput_calendarIcon_1').click()
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Arrival"]').type("15/12/2022")
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Departure"]').type("20/12/2022")
    }

    fillForm_past_dates(){
        cy.get('button.DateRangePickerInput_calendarIcon.DateRangePickerInput_calendarIcon_1').click()
        cy.get('.DateInput.DateInput_1').find('input[placeholder="Arrival"]').type("14/04/2022")
        cy.get('.DateInput.DateInput_1').get('input[placeholder="Departure"]').then(($item) => {
            expect($item).to.have.css('pointer-events', 'none')
        })
    }

    submit(){
        cy.get('form button[data-testid="button"]').click()
    }

    alertMessageShoulBe(expectmessage){
        cy.get('.ui.input.error').find('.ui.red.pointing.below.label').should('have.text', expectmessage)
    }

    alertErrorMessageShoulBe(expectmessage){
        cy.get('.ui.error.message').find('.content').should('have.text', expectmessage)
    }
}

export default new ContactPage;