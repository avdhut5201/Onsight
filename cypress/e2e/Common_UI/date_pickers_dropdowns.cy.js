const reports = require('../../fixtures/report_types.json')

describe('Test Scenario DatePickers and Dropdowns', () => {
    beforeEach(() => {
        cy.fixture("report_types").then(function (data) {
            this.reportType = data[0].reportname;
            this.daterange = data[1].daterangepicker;

        })
    });
    before(function () {

        cy
            .get('#addReportButton')
            .click({ force: true })

    })
    it('Report Type dropdown is working', function () {
        const report = this.reportType
        var report_length = report.length;
        cy
            .log("Pre condition: Should have Alarm as a default value")
        cy
            .get('#selectReportType')
            .should('have.value', 'Alarm')
            .then(() => {
                for (let index = 0; index < report_length; index++) {
                    const element = report[index];
                    cy
                        .get('#selectReportType')
                        .select(element)
                        .should('contain.text', element)
                        .log(element)
                }

            });









    });

    it('Report Template dropdown is working', function () {
        cy
            .get('#selectReportType')
            .select('Alarm')
        const report_template = ['AlarmReportType21', 'AlarmSummaryReport', 'DefaultAlarm',
            'DRLAlarmReport', 'DRLAlarmReportEMS', 'DRLAlarmReport'
        ];
        var report_length = report_template.length;
        cy
            .log("Pre condition: Should have Alarm as a default value")
        cy
            .get('#selectReportTemplate')
            .should('have.value', 'AlarmReportType21')
            .then(() => {
                for (let index = 0; index < report_length; index++) {
                    const element = report_template[index];
                    cy
                        .get('#selectReportTemplate')
                        .select(element)
                        .should('contain.text', element)
                }

            });









    });
    it('Date range picker is working correctly', function () {
        const date_range_picker = this.daterange
        for (let index = 0; index < date_range_picker.length; index++) {
            const element = date_range_picker[index];
            cy
                .get('#reportDaterangePicker')
                .find('.fa.fa-calendar:visible')
                .click()
                .then(() => {
                    cy.get('div[class="ranges"] li')
                        .each(($element1, index, list) => {
                            if ($element1.text() ===element) {
                                cy.
                                    log("Option Selected", element)
                                cy
                                    .wrap($element1).click({ force: true })
                            } else {
                                cy
                                    .log("Option unSelected", $element)
                            }
                        })
                    // .click({ force: true })


                })
                ;

        }

    });


    it('Access Dropdown is working', () => {
        const select_access = ['Private', 'Public', 'Shared']
        select_access.forEach($element => {
            cy
                .get('#userAccess')
                .select($element)
                .should('contains.text', $element)
                ;
        })


    });


    it('In filter Source State and Acknowledge State dropdown', () => {
        const source_state = ['Normal', 'Off Normal', 'Fault', 'Alert']
        const acknowledge_state = ['None', 'Acknowledged', 'Unacknowledged', 'Acknowledge Pending']
        cy
            .get(".btn.btn-default.filter_data")
            .click()
            .then(() => {
                source_state.forEach(element => {
                    cy
                        .get('#sourceState')
                        .select(element)
                        .should('contains.text', element)
                });
                acknowledge_state.forEach(element => {
                    cy
                        .get('#ackState')
                        .select(element)
                        .should('contains.text', element)
                });

            })
        cy
            .get('#modalAlarmFilter > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
            .click({ force: true })


    });

    it('Dropdowns of schedule are working accordingly', () => {
        var checkbox_name = ['dayOfWeekMon', 'dayOfWeekTue', 'dayOfWeekWed',
            'dayOfWeekThu', 'dayOfWeekFri', 'dayOfWeekSat',
            'dayOfWeekSun'];

        var week_wise = ['First', 'Second', 'Third', 'Forth']
        var word = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];

        var month_word = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'Decemeber'

        ];

        const random_hour = getRandomArbitrary(1, 24)
        const random_dayoftheweek = getRandomDayOftheWeek(word)
        const random_monthoftheyear = getRandomDayOftheWeek(month_word)
        const select_period = ['Minutes', 'Daily', 'Weekly', 'Monthly', 'Yearly']
        cy.wait(10000)
        if (cy.isChecked('#scheduleToggle')) {
            cy
                .get('#scheduleToggle')
                .check({ force: true })


        }

        cy
            .get('#openCronSchedulerModal')
            .should('be.visible')
            .click({ force: true })

        cy
            .get('.cron-period-select')
            .should('have.value', 'Minutes')
        select_period.forEach(($period) => {
            switch ($period) {
                case "Minutes":
                    const random_minute = getRandomArbitrary(1, 60)
                    cy
                        .get('.cron-minutes-select')
                        .should('be.visible')
                        .select(random_minute)
                        .should('contains.text', random_minute)


                    break;
                case "Daily":
                    const random_hour = getRandomArbitrary(0, 23)
                    const random_minute1 = getRandomArbitrary(1, 60)
                    cy
                        .get('.cron-period-select')
                        .select($period)
                    cy
                        .wait(10000)
                        .get('.cron-start-time')
                        .should('be.visible')
                        .find('.cron-clock-hour')
                        .should('be.visible')
                        .and('contains.text', 12)
                        .select(random_hour)
                        .should('contains.text', random_hour)

                    cy
                        .get('.cron-clock-minute')
                        .should('have.value', 0)
                        .select(random_minute1)
                        .should('contains.text', random_minute1)
                        ;

                    break;

                case "Weekly":
                    const weekly_random_hour = getRandomArbitrary(0, 23)
                    const weekly_random_minute = getRandomArbitrary(1, 60)
                    const weekday = getRandomDayOftheWeek(checkbox_name)

                    cy
                        .get('.cron-period-select')
                        .select($period)

                    cy
                        .get('[name="dayOfWeekMon"]')
                        .check({ force: true });
                    cy
                        .wait(10000)
                        .get('.cron-start-time')
                        .should('be.visible')
                        .find('.cron-clock-hour')
                        .should('be.visible')
                        .and('contains.text', 12)
                        .select(weekly_random_hour)
                        .should('contains.text', weekly_random_hour)

                    cy
                        .get('.cron-clock-minute')
                        .select(weekly_random_minute)
                        .should('contains.text', weekly_random_minute)
                        ;

                    break;

                case "Monthly":
                    const monthly_random_day = getRandomArbitrary(1, 30)
                    const monthly_random_month = getRandomArbitrary(1, 12)
                    const monthly_weekday = getRandomDayOftheWeek(word)
                    const nth_day = getRandomDayOftheWeek(week_wise)
                    cy
                        .get('.cron-period-select')
                        .select($period)

                    cy
                        .get('input[value="byDay"]')
                        .should('be.checked');

                    cy
                        .get('.cron-monthly-day')
                        .select(monthly_random_day)
                        .should('contains.text', monthly_random_day)
                        ;

                    cy
                        .get('.cron-monthly-month')
                        .select(monthly_random_month)
                        .should('contains.text', monthly_random_month);

                    cy
                        .get('.cron-monthly > :nth-child(2) > input')
                        .should('be.not.checked')
                        .then(($the) => {
                            cy
                                .wrap($the)
                                .check({ force: true })
                                ;

                            cy
                                .get('.cron-monthly-nth-day')
                                .select(nth_day)
                                .should("contains.text", nth_day)
                                ;

                            cy
                                .get('.cron-monthly-day-of-week')
                                .should('contain.text', 'Monday')
                                .select(monthly_weekday)
                                .should("contains.text", monthly_weekday)


                            cy
                                .get('.cron-monthly-month-by-week')
                                .should('contain.text', '1')
                                .select(monthly_random_month)
                                .should("contains.text", monthly_random_month)
                                ;
                        });




                    break;

                case "Yearly":
                    const Yearly_random_day = getRandomArbitrary(1, 30)
                    const Yearly_random_month = getRandomDayOftheWeek(month_word)
                    const Yearly_weekday = getRandomDayOftheWeek(word)
                    const Yearly_day = getRandomDayOftheWeek(week_wise)
                    cy
                        .get('.cron-period-select')
                        .select($period)

                    cy
                        .get('input[value="byDay"][name="yearlyType"]')
                        .should('be.checked');

                    cy
                        .get('.cron-yearly-month')
                        .select(Yearly_random_month)
                        .should('contains.text', Yearly_random_month)
                        ;

                    cy
                        .get('.cron-yearly-day')
                        .select(Yearly_random_day)
                        .should('contains.text', Yearly_random_day);

                    cy
                        .get('input[value="byWeek"][name="yearlyType"]')
                        .should('be.not.checked')
                        .then(($the) => {
                            cy
                                .wrap($the)
                                .check({ force: true })
                                ;

                            cy
                                .get('.cron-yearly-nth-day')
                                .should("contains.text", "First")
                                .select(Yearly_day)
                                .should("contains.text", Yearly_day)
                                ;

                            cy
                                .get('.cron-yearly-day-of-week')
                                .should('contain.text', 'Monday')
                                .select(Yearly_weekday)
                                .should("contains.text", Yearly_weekday)


                            cy
                                .get('.cron-yearly-month-by-week')
                                .should('contain.text', 'January')
                                .select(Yearly_random_month)
                                .should("contains.text", Yearly_random_month)
                                ;
                        });
                    cy
                        .get('div[id="modalCronScheduler"] div[class="modal-footer mt-2"] button:nth-child(1)')
                        .click();




                    break;
                default:
                    break;
            }
        })

    });

    it('Send Email users and emails are added', () => {
        const user = ['User', 'Email']
        const email = ['avdhutjsh5201@.com', 'avdhutjsh5201@gmail.com', 'avdhutjsh@hmail.com']

        cy
            .get('#sendEmailToggle')
            .should('not.be.checked')
            .check({ force: true })
            .should('be.checked')
            .then(() => {
                cy
                    .get('#emailRecipient')
                    .scrollIntoView()
                    .click({ force: true });

            });
        user.forEach(($user1) => {
            switch ($user1) {
                case 'User':
                    cy
                        .get('#userType')
                        .select($user1, { force: true })
                        .should('contains.text', $user1)
                        ;
                    cy
                        .get('#recipientUser')
                        .select('User66')
                        .should('contains.text', 'User66')
                        ;
                    cy
                        .get('button[id="addNUser"] em[class="fa fa-plus"]')
                        .click({ force: true });
                    break;

                case 'Email':
                    cy
                        .get('#userType')
                        .select($user1)
                        .should('contains.text', $user1)
                        ;
                    email.forEach(($id) => {
                        cy
                            .get('#recipientUser')
                            .type($id)
                        cy
                            .get('button[id="addNUser"] em[class="fa fa-plus"]')
                            .click({ force: true });

                        const valid_mail = validateEmail($id)
                        if (!valid_mail) {
                            cy
                                .get('.toast-message')
                                .should('be.visible');
                            cy
                                .get('#recipientUser')
                                .clear()
                                .log($id + "Is incorrect email")

                        }
                        else {
                            cy.log($id + "Is correct email id")
                        }
                    })
                    // 
                    break;


                default:
                    break;
            }
        })
    });
});

function getRandomArbitrary(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDayOftheWeek(word) {
    var words = word[Math.floor(Math.random() * word.length)];
    return words

}
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// cypress run --browser chrome --spec cypress/e2e/Common_UI/*.spec.js
//.toast-message