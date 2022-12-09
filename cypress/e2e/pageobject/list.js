export class List {
    selectfromlist(selector, target) {
        cy.get(selector)
            .each(($element1, index, list) => {
                if ($element1.text() === target) {
                    cy.
                        log("Option Selected", target)
                    cy
                        .wrap($element1).click({ force: true })
                }
            })
    }
}
//'div[class="ranges"] li'