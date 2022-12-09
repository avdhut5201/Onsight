describe('Common UI is interactable', () => {
    before(() => {
        cy
            .get('#addReportButton')
            .click()
    })

    it('Toggle Switch of Datetime in Days is working', () => {
        cy.log('Test Begun')
        cy
            .get('#daterangeInDaysToggle')
            .should('not.be.checked')
            .check({ force: true });
        cy
            .get('#daterangeInDaysToggle')
            .should('be.checked')
        cy
            .get('#daterangeInDaysContainer')
            .should('be.visible');
        cy
            .get('#daterangeInDaysToggle')
            .uncheck({ force: true })
        cy
            .get('#daterangeInDaysContainer')
            .should('not.be.visible');

        cy.
            log('Toggle Switch of Datetime in Days working in accordance')




    });
    it('Toggle Switch of Schedule is working', () => {

        cy
            .get('#openCronSchedulerModal')
            .should('be.disabled')

            &&

            cy
                .get('#scheduleToggle')
                .should('not.be.checked')
                .then(function ($scheduleToggle) {
                    cy
                        .wrap($scheduleToggle)
                        .check({ force: true })
                        .should('be.checked')
                        .then(function () {
                            cy
                                .get('#openCronSchedulerModal')
                                .should('be.visible')
                        })
                    cy
                        .wrap($scheduleToggle)
                    // .uncheck({ force: true })


                })






        cy.log('Test Ended')
    });
    it('Save Report & Storage Path button are working in accordance', () => {
        cy
            .get('#saveToStorageToggle')
            .should('not.be.checked')
            .check({ force: true })
            .should('be.checked')
            .then(function ($saveToStorageToggle) {
                cy
                    .get(' .col-md-1.storagePathConfig')
                    .scrollIntoView()
                    .should('be.visible')
                    .then(function ($storagePathConfig) {
                        cy
                            .get('#setStoragePath')
                            .should('not.be.checked')
                            .check({ force: true })
                            .then(() => {
                                cy
                                    .get('#queryStoragePath')
                                    .should('be.visible')

                            })
                            ;
                    });

            })
            ;
        cy
            .get('#saveToStorageToggle')
            .should('be.checked')
            .uncheck({ force: true })





    });
    it('Send Email Toggle Switch is working.Send Email button is visible when toggle'
        + 'switch is on and invisible when  off'
        , () => {
            cy
                .get('#sendEmailToggle')
                .should('not.be.checked')
                .check({ force: true })
                .should('be.checked')
                .then(() => {
                    cy
                        .get('#emailRecipient')
                        .should('be.visible');
                });
            cy
                .get('#sendEmailToggle')
                .should('be.checked')
            //  .uncheck({ force: true })


        });
    it('All Export As buttons are working Successfulli', () => {
        cy
            .get('#exportAsPdfToggle')
            .should('not.be.checked')
            .check({ force: true })

        cy
            .get('#exportAsExcelToggle')
            .should('not.be.checked')
            .check({ force: true })

        cy
            .get('#exportAsCSVToggle')
            .should('not.be.checked')
            .check({ force: true })
    });

});
