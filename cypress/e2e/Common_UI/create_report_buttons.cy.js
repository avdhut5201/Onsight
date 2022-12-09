describe('Common UI is interactable', () => {
    
    it('Report Button is clickable', function () {


        cy
        
            .get('#addReportButton')
            .click()
        
        cy
            .wait(10000);

        // cy.contains
        if (cy.get('div [class="modal-dialog modal-lg "] h4')
            .should('be.visible')) {
                cy.log('Report Button is working')
        }
    })
});
// #<div  xpath="1">
