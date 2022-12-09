export class Report_type {
    SelectReporttype(element) {

        cy
            .get('#selectReportType')
            .should('have.value', 'Alarm')
            .then(() => {
                cy
                    .get('#selectReportType')
                    .select(element)
                    .should('contain.text', element)
                    .log(element)



            })

    }
    SelectTemplate(target) {
        cy
            .get('#selectReportTemplate')
            .should('have.value', 'AlarmReportType21')
            .then(() => {

                cy
                    .get('#selectReportTemplate')
                    .select(target)
                    .should('contain.text', target)







            });
    }

    Dropdownelement(selector, $element) {
        cy
            .get(selector)
            .select($element)
            .should('contains.text', $element)
    }
}