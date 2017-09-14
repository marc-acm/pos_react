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
create-react-app pos_app
```

After creation, your project should look like this:

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

Using your terminal got to your project directory then run:
### `npm start`

This will normally open your app in the browser;  if not then open a browser then type [http://localhost:3000].

Automatic page reload when after applying and saving your edits.






## Components Creation
Components let you split the UI into independent, reusable pieces.
First, create a new component `Menu`, succeeding components will be created while following this tutorial.
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

First, create the add function in the Menu component:


class Menu extends Component {
   

  add() {
      this.setState({qty: this.state.qty + 1});
      this.props.handleTotal(this.props.price); 
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









