package avdhut.onsight.pageobject;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import avdhut.onsight.commonutils.BaseComponenets;

public class HomePage extends BaseComponenets {
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
	public HomePage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
		this.driver=driver;
	}
	public void CreateReport_Button() {
		
		IsClickable(createReportBy);
		WebElement create_Report=driver.findElement(createReportBy);
		create_Report.click();
	}
	public void get_headers() {
		IsVisible(teable_headingBy);
		List<WebElement> table_headerElement=driver.findElements(teable_headingBy);
		
			for (WebElement header : table_headerElement) {
				System.out.println(table_headerElement.size());
			}
		
		
		
	}
	public void view_report_values(String report_title) throws InterruptedException {
		int no_of_pages;
		IsVisible(baseTableBy);
		WebElement baseTable=driver.findElement(baseTableBy);
		List<WebElement> table_roWebElement=baseTable.findElements(report_name_rowsBy);
		List<String> list=new ArrayList<String>();
		for (WebElement webElement : table_roWebElement) {
			if (webElement.getText().contains(report_title)) {
				System.out.println(true);
				IsClickable(viewBy);
				System.out.println(webElement.getText());
				webElement.findElement(viewBy).click();
				IsClickable(view_dataBy);
				driver.findElement(view_dataBy).click();	
				IsVisible(next_paginateBy);
				List<WebElement> pagebar=driver.findElements(paginateBy);
				for(WebElement page:pagebar) {
					list.add(page.getText());
				}
			 no_of_pages=name(list);
			
				if (driver.findElement(next_paginateBy).isDisplayed()) {
					for (int i = 1; i <= no_of_pages; i++) {
						if (i==1) {
							System.out.println("first_page");
							get_headers();
						}
						else {
							IsClickable(By.xpath("//div[@id='reportDataTable-0_paginate']/ul[@class='pagination']/li/a[normalize-space()='"+i+"']"));
							driver.findElement(By.xpath("//div[@id='reportDataTable-0_paginate']/ul[@class='pagination']/li/a[normalize-space()='"+i+"']")).click();
							
							if(i==no_of_pages) {
								break;
							}
						}
//						Thread.sleep(10000);
						
				   }
				} else {

				}
				
			
		}
//				
	 }
	}
	
	public int name(List<String> page_noElement) {
		
		int maxNum =  page_noElement.stream()
		        .mapToInt(Integer::parseInt)
		        .max()
		        .orElse(-1);
		
		
		return maxNum;
	}
//	
}
	

	
