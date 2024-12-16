#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Login functionality
Feature: Login functionality

  As a user of the application
  I want to be able to log in with valid credentials
  So that I can access the app's features

  @positive
  Scenario: Successful login with valid credentials
    Given the app is launched
    When the user navigates to the login screen
    And the user enters username "bob@example.com" and password "10203040"
    And the user clicks the login button
    Then the login is successful


  @negative
  Scenario: Login with invalid credentials
    Given the app is launched
    When the user navigates to the login screen
    And the user enters username "1@2.com" and password "f-o-o"
    And the user clicks the login button
    Then Wrong Cred

  @negative
  Scenario: Login without entering any credentials
    Given the app is launched
    When the user navigates to the login screen
    And the user enters username "" and password ""
    And the user clicks the login button
    Then Username is required Message

  @negative
  Scenario: Login without entering a password
    Given the app is launched
    When the user navigates to the login screen
    And the user enters username "bob@example.com" and password ""
    And the user clicks the login button
    Then Password is required Message
    
    @negative
  Scenario: Login with lockedAccout
    Given the app is launched
    When the user navigates to the login screen
    And the user enters username "alice@example.com" and password "10203040"
    And the user clicks the login button
    Then Locked Out Message    
