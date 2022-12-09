import { Report_type } from '../pageobject/report_type'
import { TextBox } from '../pageobject/texbox'
import { List } from '../pageobject/list'
import { Button } from '../pageobject/Button'
import { Dropdown } from '../pageobject/dropdown'
describe('To generate report', function () {
    beforeEach(() => {
        cy.fixture("report_types").then(function (data) {
            this.reportType = data[0].reportname;
            this.daterange = data[1].daterangepicker;
            this.template = data[2].report_template

        })

    });
    before(function () {

        cy
            .get('#addReportButton')
            .click({ force: true })



    })

    it('Report Generator for alarm and its template', function () {
        const select_access = ['Private', 'Public', 'Shared']
        var reporttype2 = new Report_type()
        var textbox = new TextBox()
        var list = new List()
        var button = new Button()
        // var dropdown=new Dropdown()
        const reporttype = this.reportType
        const daterange = this.daterange
        const report_template = this.template[0]

        reporttype.forEach(element => {
            if (element == "Alarm") {
                reporttype2.SelectReporttype(element)
                const alarm_template = report_template.Alarm
                const target = getRandomDayOftheWeek(alarm_template)
                let random_date = getRandomDayOftheWeek(daterange)
                let reportNo = getRandomArbitrary(0, 99)
                const path = "C:\\Users\\avdhu\\OneDrive\\Documents\\Onsight\\Downloads"
                let random_access = getRandomDayOftheWeek(select_access)
                reporttype2.SelectTemplate("DefaultAlarm")
                cy.wait(10000)
                textbox.TypeinTextBx('#reportNo', reportNo)
                textbox.TypeinTextBx('#reportQueryName', "Cypress_test")
                list.selectfromlist('div[class="ranges"] li', "Yesterday")
                reporttype2.Dropdownelement('#userAccess', "Public")
                button.SelectParameter()
                button.CONFIGUREALARMCOLUMN('#selectedAlarmColumntimestamp')
                button.CONFIGUREALARMCOLUMN('#selectedAlarmColumnsourceName')
                button.CONFIGUREALARMCOLUMN('#selectedAlarmColumnsourceState')
                button.Submit("#saveConfigureAlarmColumn")
                button.ExportChkbx('#exportAsPdfToggle')
                cy.wait(10000)
                button.Submit("button[onclick='saveReportQuery()']")
                cy.get('.toast-message')
                    .invoke('text')
                    .then(($text) => {
                        cy.log($text)
                    });




            }
        });

    })
});
// 'selectedAlarmColumntimestamp' 'selectedAlarmColumnsourceName' 'selectedAlarmColumnsourceState'
//'selectedAlarmColumnackState' 'selectedAlarmColumnmsgText' ''selectedAlarmColumnnotes' ''selectedAlarmColumnallNotes''selectedAlarmColumnalarmValue''//

function getRandomDayOftheWeek(word) {
    var words = word[Math.floor(Math.random() * word.length)];
    return words

}
function getRandomArbitrary(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}