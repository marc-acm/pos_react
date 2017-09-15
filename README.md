#POS (with React)


This project tutorial was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [Setup](#setup)
- [Components Creation](#creating-new-components)
- [Functions and Events](#functions-and-events)
- [States](#states)
- [Reusing Components](#reusing-components)
- [Props - Passing Data to child components](#props---passing-data-to-child-components)
- [Passing Data between child components](#passing-data-between-child-components)
- [Handling Arrays](#handling-arrays)
- [Handling Forms](#handling-forms)

## Setup
Install nodejs (https://nodejs.org)<br>
Install create-react-app (https://github.com/facebookincubator/create-react-app)<br>

Generate your starting files
```
create-react-app pos_reactapp
```

Go to you project (pos_reactapp) directory.

.\pos_reactapp


Just to show what is created on your project when you access it via a text editor (which we will go to that later:) 

```
pos_app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Still on your terminal:

Make sure that when you run a command in the terminal you are in the project directory.

To make sure that dependencies are installed run this command :
### `npm install`


Using your terminal got to your project directory then run:
### `npm start`

This will normally open your app in the browser;  if not then open a browser then type [http://localhost:3000].

Automatic page reload when after applying and saving edits using your text editor.



Open your project for editing by launching your text editor (e.g. Atom; Sublime;)



Locate your App.js in the src folder of the project app (./pos_reactapp)
We are going to build everything new so remove everything inside return()

```sh
   import React, { Component } from 'react';
   import logo from './logo.svg';
   import './App.css';

    class App extends Component {
       render() {
         return (
            <div className="App">
            </div>
               );
               }
              }
export default App;




## Components Creation
Components let you split the UI into independent, reusable pieces.


First, create a new component `Menu`, (succeeding components will be created while following this tutorial).


```
...

class Menu extends Component {
  render() {
    return (
    
    );
  }



export default Menu
```


## Functions and Events

Create the three (3) functions (add, show and less) in the Menu component:


````

class Menu extends Component {



...

  add() {
      this.setState({qty: this.state.qty + 1});
      this.props.handleTotal(this.props.price); 
    }


   add() {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price); 
  }

  show() {
    this.props.handleShow(this.props.name);
    this.props.handleShow(this.props.image);
  }
    

  less() {
    this.setState({qty: this.state.qty - 1});
    this.props.handleTotal(-this.props.price); 
  } 


  render() {
    return (
      
    );
  }






## States


## Reusing Components


## Props - Passing Data To Child Components


## Passing Data between child components


## Handling Arrays


## Handling Forms









