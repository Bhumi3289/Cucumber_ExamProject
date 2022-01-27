$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/SetBackgroundColor.feature");
formatter.feature({
  "name": "The background color should be set as skyblue color",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bhumi"
    }
  ]
});
formatter.scenario({
  "name": "1 Sky Blue Background",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bhumi"
    },
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "SetBGcolor.Set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button",
  "keyword": "When "
});
formatter.match({
  "location": "SetBGcolor.When_I_click_on_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "SetBGcolor.Then_the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 White Background Change",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bhumi"
    },
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "SetBGcolor.Set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Set white button",
  "keyword": "When "
});
formatter.match({
  "location": "SetBGcolor.I_click_on_the_Set_white_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "SetBGcolor.Then_the_background_color_will_change_to_white()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});