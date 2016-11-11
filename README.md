# RegExperts
#### ...or learn regular expressions with Edward Snowden

Regexperts is a "fun" game to help you learn the dark arts of regular expressions.

![Eddy](http://i.imgur.com/bycklVR.png)



#### How to play

Head over to https://snowden-files.herokuapp.com to start playing or alternatively you can clone the repo and run it locally

**To run locally**

- If you haven't already install [Node](https://nodejs.org/)
- If you haven't already install Bower - you can use the following command from the terminal
```
npm install bower -g
```
- Clone this directory
- Navigate into it and run the following code from the command line
```
npm install
bower install
npm run start
```
- Open your browser and navigate to [local host 8080](http://localhost:8080/#/)
- Start to learn regular expressions with Edward Snowden

#### Cool Features

- Limited keystrokes to complete each level
- Checkpoints
- Hints
- Game over and win conditions
- Top scores saved and persisted via a de-coupled back-end

#### Running tests

- To run the unit tests type the following code into the command line
```
npm run test-units
```

- To run feature tests selenium webdriver needs to be running in the background
```
npm run update-selenium
npm run start-selenium
```

- Then in a new terminal window navigate to the root of this directory and then type
```
npm run test-features
```

If you are having issues this may be because the version of chrome driver being used is not compatible with the latest versions of chrome - you will need to be using chromedriver v2.25 or later. 
