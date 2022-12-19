package avdhut.onsight.pageobject;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import avdhut.onsight.commonutils.BaseComponenets;

public class LoginPage extends BaseComponenets {
	 WebDriver driver;
	 By usernameBy=By.cssSelector("input[name='j_username']");
	 By passwordBy=By.cssSelector("input[type*='password']");
	 By loginBy=By.cssSelector("input[value*='Login']");
	 public LoginPage(WebDriver driver) {
		 super(driver);
		this.driver=driver;
	}
	
	 public void login_username(String username_1) {
			WebElement username=driver.findElement(usernameBy);
			username.sendKeys(username_1);
			
			
	 }
	 public void EnterPassword( String password) {
		
       WebElement passwordElement=driver.findElement(passwordBy);
       passwordElement.sendKeys(password);
    }
	 
	public void click0nsubmit() {
		 IsClickable(loginBy);
		WebElement login=driver.findElement(loginBy);
		login.click();
	}
		
	
}
