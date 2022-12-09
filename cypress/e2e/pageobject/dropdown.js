export class Dropdown{
    dropdownelement(selector,$element){
        cy
        .get(selector)
        .select($element)
        .should('contains.text', $element)
    }
}