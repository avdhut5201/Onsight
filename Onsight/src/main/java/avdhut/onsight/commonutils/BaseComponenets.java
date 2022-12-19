package avdhut.onsight.commonutils;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseComponenets {
	WebDriver driver;
	WebDriverWait wait;

	public BaseComponenets(WebDriver driver) {
		// TODO Auto-generated constructor stub
		this.driver = driver;
		wait = new WebDriverWait(driver, Duration.ofSeconds(10));

	}

	public boolean IsVisible(By element) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(element));
		return true;
	}
	
	public void ElementsIsVisible(By element) {
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));

	}
	
	public  void IsClickable(By element) {
		wait.until(ExpectedConditions.elementToBeClickable(element));
		

	}
}
