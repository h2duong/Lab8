# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter) 
    1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    No; you would not use a unit test to test the message feature of a messaging application. The message feature encompasses more than one process, such as writing and sending. Something could go wrong and you wouldn't know where the error comes from. An actual unit test might be testing just writing or just sending messages.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
    Yes; testing the max message length of a message does not involve more than one process, as it only looks for the length of the message.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

