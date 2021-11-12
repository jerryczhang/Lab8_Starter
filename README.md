# Lab 8 - Starter

Group Members: Justin Nguyen, Jerry Zhang

## Check Your Understanding

1) Where would you fit your automated tests in your Recipe project development pipeline?
   
   We should fit our automated tests within a Github action that runs whenever code is pushed in our Recipe project development pipeline so that we never forget to run tests when we push our code.

2) Would you use an end to end test to check if a function is returning the correct output?
   
   No, that would be better suited for unit testing.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   We would not use a unit test because it requires multiple components to send and receive messages, and unit tests can't test how these components interact with each other.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
   We would use a unit test, because we could test a single component to check whether the "max message length" feature is actually restricting the message length.