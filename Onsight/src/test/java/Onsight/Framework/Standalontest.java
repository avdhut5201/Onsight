package Onsight.Framework;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.AddHasCasting;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.github.javafaker.Faker;

import avdhut.onsight.pageobject.CreateReport;
import avdhut.onsight.pageobject.HomePage;
import avdhut.onsight.pageobject.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Standalontest {
	
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		try {
			String urlString = "https://oinsightsvm1.westindia.cloudapp.azure.com:444/ctsOInsightsBMS/res/createReport.html";
			String userEmailString = "User66";
			String userPassword = "Avdhut@5201";
			String titleString;
			Faker faker = new Faker();
			WebDriverManager.chromedriver().setup();
			ChromeOptions options = new ChromeOptions();
//			options.addArguments("--ignore-ssl-	errors=yes");
			options.addArguments("--ignore-certificate-errors");
			WebDriver driver = new ChromeDriver(options);
			driver.get(urlString);
			LoginPage loginPage = new LoginPage(driver);
			loginPage.login_username(userEmailString);
			loginPage.click0nsubmit();
			loginPage.EnterPassword(userPassword);
			loginPage.click0nsubmit();
			HomePage homePage = new HomePage(driver);
			homePage.CreateReport_Button();
			CreateReport createReport = new CreateReport(driver);
			titleString=faker.name().firstName ();
			createReport.report_type("Alarm");
			createReport.report_query_no("100");
			createReport.report_query(titleString);
			createReport.report_template("DefaultAlarm");
			createReport.daterangepicker("Last 24 hours");
			createReport.access("public");
			createReport.select_paarameter();
			// createReport.parameter("//tr[@class='draggable']//input[@id='selectedAlarmColumntimestamp']");
			// createReport.parameter();
			Thread.sleep(30000);
			createReport.save();
			createReport.pdf_toggle();
			createReport.genrate();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			
		}
	}

}
