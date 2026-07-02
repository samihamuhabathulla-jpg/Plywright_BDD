@smoke
Feature: Login to demoBlaze site

Scenario:Login test
Given the user is on demoblaze site
When the user tries to login with valid credentials by clicking login
And the user enters username as "samihaM"
And the user enters password as "2005" and clicks login button
Then the user should naviagte to the products page successfully