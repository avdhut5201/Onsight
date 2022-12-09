
describe('Fixture Test', function ()  {
    before(() => {
        cy.fixture("report_types").then(function(data){
            this.daterange = data[0].reportname;
            this.template = data[2].report_template;
            
        })
    });
    it('Array of fixture', function()  {
    const report_type=this.daterange
    const report_template=this.template[0]
    report_type.forEach(element => {
        // if (element==this.daterange[0]) {
        //     const template=report_template[0]
            
        //     cy.log(template.Degree_Days)
        // } else {
            
        // }
        switch (element) {
            case this.daterange[0]:
                let template=report_template.Alarm
                cy.log(template)
                break;
                case this.daterange[1]:
                    let trend_template=report_template.Trends
                    cy.log(trend_template)        
                    break;
            default:
                cy.log(false);
                break
        }
    });
    // cy.log(report_template)
       
        
        
    });
});