export class Button{
    SelectParameter(){
        cy
        .get('.btn.btn-default.select_parameter_button')
        .click();
    }
    CONFIGUREALARMCOLUMN(selector){
        cy
            .get('#alarmColumnTable')
            .scrollIntoView()
            .wait(10000)
            .then(()=>{
                cy
                    .get(selector)
                    .should('not.be.checked')
                    .check({force:true});
        });
    }

    Submit(selector){
        cy
            .get(selector)
            .click()
            ;
    }
    Savereport(path){
        cy
        .get('#saveToStorageToggle')
        .should('not.be.checked')
        .check({force:true})
        .then(($element)=>{
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
                                    .type(path)

                            })
                            ;
                        })
                
        });
    }

    ExportChkbx(selector){
        cy
        .get(selector)
        .check({force:true});
    }
}