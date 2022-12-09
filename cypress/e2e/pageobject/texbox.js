export class TextBox {
    TypeinTextBx(selector, text) {
        cy
            .get(selector)
            .type(text);
    }
}