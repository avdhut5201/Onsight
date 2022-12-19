package avdhut.onsight.pageobject;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import avdhut.onsight.commonutils.BaseComponenets;

public class CreateReport extends BaseComponenets {
	WebDriver driver;
	By report_typeBy = By.xpath("//select[@id='selectReportType']");
	By report_templateBy = By.xpath("//select[@id='selectReportTemplate']");
	By accessBy = By.xpath("//select[@id='userAccess']");
	By daterangeBy = By.cssSelector("div[class='ranges'] li");
	By arrowBy = By.cssSelector("em[class='fa fa-caret-down']");
	By parameter_buttonBy = By.xpath("//button[normalize-space()='Select Parameters']");
	By alarmcolumntableBy = By.xpath("//table[@id='alarmColumnTable']");
	By reportQueryName=By.cssSelector("input[id*='reportQueryName']");
	By reportNoBy=By.cssSelector("input[id*='reportNo']");
	By generateBy=By.cssSelector("button[onclick='saveReportQuery()']");
	By pdftoggleBy=By.cssSelector("label[for='exportAsPdfToggle']");
	By saveBy=By.xpath("//button[@id='saveConfigureAlarmColumn']");
//	input[id*='reportNo']
//"input[id*='selectedAlarmColumnsourceName']"
	By selectedAlarmColumnsourceNameBy = By.cssSelector("input[id*='selectedAlarmColumnsourceName']");
//
	public CreateReport(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
		this.driver = driver;
	}

	
	public void report_type(String report_type) {
		WebElement dropdownElement = driver.findElement(report_typeBy);
		Select reporttypeSelect = new Select(dropdownElement);
		reporttypeSelect.selectByVisibleText(report_type);

	}

	public void report_template(String report_template) {
		WebElement dropdownElement = driver.findElement(report_templateBy);
		Select reportemplateSelect = new Select(dropdownElement);
		reportemplateSelect.selectByValue(report_template);

	}
	
	public void report_query(String title) {
		IsVisible(reportQueryName);
		WebElement report_query=driver.findElement(reportQueryName);
		report_query.sendKeys(title);
		
	}
	public void report_query_no(String id) {
		IsVisible(reportNoBy);
		WebElement report_No=driver.findElement(reportNoBy);
		report_No.sendKeys(id);
		
	}

	public void access(String access_identifier) {
		WebElement dropdownElement = driver.findElement(accessBy);
		Select Access_Select = new Select(dropdownElement);
		Access_Select.selectByValue(access_identifier);

	}

	public void daterangepicker(String range) {
		WebElement arroWebElement = driver.findElement(arrowBy);
		arroWebElement.click();
		IsVisible(daterangeBy);
		List<WebElement> daterangelistElement = driver.findElements(daterangeBy);
		for (WebElement option : daterangelistElement) {
			if (option.getText().equals(range)) {
				option.click(); // click the desired option
				break;
			}
		}

	}

	public void select_paarameter() {
		WebElement select_parameterWebElement = driver.findElement(parameter_buttonBy);
		select_parameterWebElement.click();
		WebElement table_elementElement = driver.findElement(alarmcolumntableBy);
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].scrollIntoView(true);", table_elementElement);
	}

	public void parameter() {
		IsClickable(selectedAlarmColumnsourceNameBy);
		WebElement parameter_radioElement = driver.findElement(selectedAlarmColumnsourceNameBy);
		if (!parameter_radioElement.isSelected()) {
			parameter_radioElement.click();
		}
	}
	
	public void save() {
		WebElement save_btnElement=driver.findElement(saveBy);
		save_btnElement.click();
	}
	
	public void pdf_toggle() {
		WebElement pdfWebElement=driver.findElement(pdftoggleBy);
		if (!pdfWebElement.isSelected()) {
			pdfWebElement.click();
		}
	}
	
	public void genrate() {
		WebElement genratElement=driver.findElement(generateBy);
		genratElement.click();
	}

	
}
