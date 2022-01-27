package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.SetbackgroungColorPage;
import pages.TestBase;

public class SetBGcolor extends TestBase {
	
	SetbackgroungColorPage BGcolor;

	@Before
	public void beforeRun() {
		initDriver();
		BGcolor = PageFactory.initElements(driver, SetbackgroungColorPage.class);
	}
	
	@Given ("Set SkyBlue Background button exists")
	public void Set_SkyBlue_Background_button_exists() {
		
		driver.get("https://techfios.com/test/101/");
		BGcolor.verifyingSetSkyblueButtonExist();
	}
	
	@When ("I click on the button")
	public void When_I_click_on_the_button() throws InterruptedException {
		
		BGcolor.clickingSetSkyblueBackgroundButton();
		Thread.sleep(2000);
//		
//			if(SetbackgroungColorPage.hex=="#ffffff") {
//			
//				BGcolor.clickingSetSkyblueBackgroundButton();
//		}
//		else if(SetbackgroungColorPage.hex=="#87ceeb"){
//				BGcolor.clickingSetSkyWhiteBackgroundButton();
//		}
//		
		
		}
	
	@Then ("the background color will change to sky blue")
	public void Then_the_background_color_will_change_to_sky_blue() {
		
		BGcolor.verifyingbackgroundWithSkyblueColor();
		
	}
	
	@Given ("Set SkyWhite Background button exists")
	public void Set_SkyWhite_Background_button_exists() {
		driver.get("https://techfios.com/test/101/");
		BGcolor.verifyingSetWhiteButtonExist();
		
	}
	
	@When ("I click on the Set white button")
	public void I_click_on_the_Set_white_button() throws InterruptedException {
		
		BGcolor.clickingSetSkyblueBackgroundButton();
		Thread.sleep(2000);
		BGcolor.clickingSetSkyWhiteBackgroundButton();
		Thread.sleep(2000);
	}
	
	@Then ("the background color will change to white")
	public void Then_the_background_color_will_change_to_white() {
		
		BGcolor.verifyingbackgroundWithWhiteColor();
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
		
	}
	
}
