# Yahoogle-answers

#### _Lets Users ask questions_

#### By _**Andrew Fisher**_

## Description

_This app lets a user ask a question and then other users may answer the asked question_


## Specs
1. _App can list preset question stored in database_

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


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
possiby ember install ember-moment
and how to fix if cant find
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

### Deploying

Specify what it takes to deploy your app.

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

## Future Ideas
  * _stop user from re adding a favorite question alert button that prevents the change_
  * _change button after pressing like_
   *  _and maybe make it remove from favorites_
  * _admin page that submitted answers are sent for approval_
  * _report abuse page that send the comment or question to the admin page to delete_

### License

*GPL*
known bug click the favorite button then go to another page, when come back it doesnt say un-favorite and thus can add again. Any advice?
Copyright (c) 2016 **_Andrew Fisher_**
