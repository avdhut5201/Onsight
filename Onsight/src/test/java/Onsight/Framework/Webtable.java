package Onsight.Framework;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.github.javafaker.Faker;

import avdhut.onsight.commonutils.BaseComponenets;
import avdhut.onsight.pageobject.HomePage;
import avdhut.onsight.pageobject.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Webtable  {
	WebDriver driver;
	By createReportBy=By.cssSelector("button[data-target*='#addReportModal']");
	By baseTableBy=By.xpath("//table[@id='query-table']");
	By report_name_rowsBy=By.xpath("//tbody/tr");
	By viewBy=By.xpath("//button[contains(@title,'View')]");
	By view_dataBy=By.xpath("//button[contains(@title,'View data')]");
	By dataBy=By.xpath("//table[@id='reportDataTable-0']/tbody/tr	");
	By teable_headingBy=By.xpath("//div[@class='dataTables_scrollHeadInner']//tr[@id='report-data-table-header-0']/th");
	By next_paginateBy=By.xpath("//li[@id='reportDataTable-0_next']");
	By paginateBy=By.xpath("//div[@id='reportDataTable-0_paginate']/ul[@class='pagination']/li[@class='paginate_button page-item ']");
	By no_of_pagesBy=By.xpath("//div[@id='reportDataTable-0_info']");
	
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		String urlString = "https://oinsightsvm1.westindia.cloudapp.azure.com:444/ctsOInsightsBMS/res/createReport.html";
		String userEmailString = "User66";
		String userPassword = "Avdhut@5201";
		String titleString;
		String textString="Clarita";
		Faker faker = new Faker();
		WebDriverManager.chromedriver().setup();
		ChromeOptions options = new ChromeOptions();
		// options.addArguments("--ignore-ssl- errors=yes");
		options.addArguments("--ignore-certificate-errors");
		WebDriver driver = new ChromeDriver(options);
		driver.get(urlString);
		LoginPage loginPage = new LoginPage(driver);
		loginPage.login_username(userEmailString);
		loginPage.click0nsubmit();
		loginPage.EnterPassword(userPassword);
		loginPage.click0nsubmit();
		HomePage homePage = new HomePage(driver);
		homePage.view_report_values(textString);
		//IsVisible(baseTableBy);
		//WebElement baseTable=driver.findElement(baseTableBy);
		//List<WebElement> table_roWebElement=baseTable.findElements(report_name_rowsBy);
		//List<String> list=new ArrayList<String>();
		//for (WebElement webElement : table_roWebElement) {
//			if (webElement.getText().contains(report_title)) {
//				System.out.println(true);
//				IsClickable(viewBy);
//				System.out.println(webElement.getText());
//				webElement.findElement(viewBy).click();
//				IsClickable(view_dataBy);
//				driver.findElement(view_dataBy).click();
//				IsVisible(teable_headingBy);
//				IsVisible(next_paginateBy);
//				List<WebElement> pagebar=driver.findElements(paginateBy);
//				for(WebElement page:pagebar) {
//					list.add(page.getText());
//				}
////				name(list);
//				if (driver.findElement(next_paginateBy).isDisplayed()) {
//					for (int i = 1; i <= 30; i++) {
//						if (i==1) {
//							System.out.println("first_page");
//							List<WebElement> table_headerElement=driver.findElements(teable_headingBy);
//							if (i==1) {
//								for (WebElement header : table_headerElement) {
//									System.out.println(header.getText());
//								}
//							}
//						}
//						else {
//							IsClickable(By.xpath("//div[@id='reportDataTable-0_paginate']/ul[@class='pagination']/li/a[normalize-space()='"+i+"']"));
//							driver.findElement(By.xpath("//div[@id='reportDataTable-0_paginate']/ul[@class='pagination']/li/a[normalize-space()='"+i+"']")).click();
//							
//							if(i==30) {
//								break;
//							}
//						}
////						Thread.sleep(10000);
//						
//				   }
//				} else {
		//
//				}

		
	
	
	}
}
//tr[class='odd'] em[class='fa fa-table']
