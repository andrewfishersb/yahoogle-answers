# Yahoogle-answers

#### By _**Andrew Fisher**_

## Description

_This web app is a Question and Answer board, emulating sites such as Yahoo Answers or Quora._

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
  - A user can post a question accompanied by a user name and any extra notes about their question, this is then saved into a database.
    * If the username is left blank the username will be posted as "anonymous".
  - A user can favorite a question.
  - A user can report a question as inappropriate.
  - If a question has more than three answers it is marked with a fire symbol.

  * On any questions page:
    - A user can edit or delete the question.
    - A user can report a question as inappropriate.
    - A user can add an answer to the question and will then be added to a database.
    - A user can then edit or delete their question.
    - A user can report an answer as inappropriate.
    - A user can upvote or downvote an answer.
      * if a post reaches -6 downvotes it is automatically deleted.

  * On the Administrator page:
    - The administrator can view questions and answers that have been reported as inappropriate, the username.
    - The administrator can choose to delete the question or answer.
    - The administrator can choose to dismiss the question or answer if they deem it appropriate.

* On favorites page:
  - A user can view questions they have favorited
  - A user can remove questions from favorites.

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



### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


### License

*GPL*

Copyright (c) 2016 **_Andrew Fisher_**
