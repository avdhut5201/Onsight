

describe('Testing a command', () => {
    before(() => {
        cy
            .get('#addReportButton')
            .click()
    })
    it('isChecked', () => {
        if (cy.isUnChecked('#daterangeInDaysToggle')) {
            cy.get('#daterangeInDaysToggle').check({force:true});
        }
        if (cy.isChecked('#daterangeInDaysToggle')) {
            cy.get('#daterangeInDaysToggle').uncheck({force:true});
        }
       

        // cy.log(cy.isChecked('#daterangeInDaysToggle'))
        // cy
        //     .get('#daterangeInDaysToggle')
        //     .invoke('prop','checked').then(($checked)=>{
        //        if ($checked) {
        //         // expect($checked).to.be.true
        //          return true

        //        } else {
        //         // expect($checked).to.be.false
        //         return false

        //        }
        //     });
        //     cy
        //     .get('#daterangeInDaysToggle')
        //     .check({ force: true }).then(($checked)=>{
        //         if ($checked) {
        //          // expect($checked).to.be.true
        //           return true
 
        //         } else {
        //          // expect($checked).to.be.false
        //          return false
 
        //         }
        //      });
        
           
    });
});