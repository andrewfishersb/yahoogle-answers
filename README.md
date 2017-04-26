# Yahoogle-answers

#### By _**Andrew Fisher**_

## Description

_This is an app for asking and answering questions_

## Images

![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25399960/f6fbbe6e-29a5-11e7-96f7-3d5c2ba9b493.png)

![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25399972/fd5f569e-29a5-11e7-998f-f38406bf72e4.png)

![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25399983/02c35cde-29a6-11e7-89e1-cc785efefd8a.png)

## User Stories

* As a user, I want to be able to create a question.
* As a user, I want to be able to edit my question.
* As a user, I want to be able to answer a question.
* As a user, I want to be able to edit an answer.
* As a user, I want to be able to upvote or downvote answers.
* As a user, I want to be able to flag inappropriate questions or answers.
* As an administrator, I want to be able to view flagged questions and answers.
* As an administrator, I want to be able to delete flagged questions and answers.
* As an administrator, I want to be able to dismiss falsley flagged questions and answers.



## Specifications
* On opening homepage:
  - Any previously asked questions will be displayed
  - A user can post a question accompanied by a user name and any extra notes about their question.
    * If the username is left blank the username will be posted as "anonymous".
  - A user can favorite a question.
  - A user can report a question as inappropriate. 
 

2. _User can enter new questions alongside their username and any additional notes_
  * _if no username is input, they are listed as anonymous_

3. _User can delete their question, username and notes_

4. _User can edit their question and any additional notes_

5. _Another user can answer a question and provide their username_
  * _if no username is input, they are listed as anonymous_

6. _User can delete their question and username_

7. _User can edit their answer_

8. _Refractored so when user deletes a question all associated answers are also deleted_

9. _User can favorite a question and displayed on a new route_

10. _User can remove the favorited question_

11. _Users can upvote answers_

12. _Users can downvote answers, if below -5 the answer is removed from the database_

13. _Users can report abuse on question or answers_

14. _An admin can look through the reports of abuse and either dismiss and case or delete the question or answer from the database_


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd yahoogle-answers`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Technologies Used

  * _JavaScript_
  * _Ember_
  * _Firebase_
  * _Node_
  * _Bower_
  * _HTML_
  * _CSS_

## Known Bugs

* _When the user clicks the favorite button then goes to another page, when come back it doesn't say un-favorite and thus the user can add that question to their favorites again. Any advice?_

### License

*GPL*

Copyright (c) 2016 **_Andrew Fisher_**
