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
We are going to build everything new so remove parts of the the App Component.
What will remain should be the following:

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

    




```


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



export default App;
```


## Functions and Events

Create the three (3) functions (add, show and less) in the Menu component and output this functions by declaring them on the render area with onClick event inside the button.  :
(We will include the state and props which are going to be discussed in the next section.)

````

class Menu extends Component {



...

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
    <div className="img-rounded">
      <img src = {process.env.PUBLIC_URL + 'img/img'+ this.props.img_id +'.png'} alt = "Menu Image"/>
    </div>
    
    <div>
      <p>{this.props.name} = Php {this.props.price}</p>
      <button className = "btn btn-primary" onClick={this.add}>+</button>
      <button className = "btn btn-primary" onClick={this.show}>Show</button>
      <button className = "btn btn-primary" onClick={this.less}>-</button>
      <h3>{this.state.qty}</h3>
      <h3>Php {this.state.qty*this.props.price}</h3>
      <hr>  
    </div>
    )

  }



export default App;

  `````




## States
State just like props, are data types that control a component.  For data that is going to change we have to use state.  In general, you should initialize state in the constructor, and then call setState when you want to change it.

Right below the class Menu extends Component add constructor(props) and this.state and bind all show, add and less functions:


```
......

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {qty:0};
    this.add = this.add.bind(this);
    this.show = this.show.bind(this);
    this.less = this.less.bind(this);
  }


......


export default App;

```


## Reusing Components
One advantage of components are they are reusable.  In these section we will create  additional components including arrays. Create MenuList, 

```
....
class MenuList extends Component {

    constructor(props) {
      super(props);
      this.state={total:0,
         menuList: [{name:"Buteteng Tugak", price: 50.00, img_id: "00" },
                  {name:"Abuos", price: 60.00, img_id: "01"},
                  {name:"Ginataang Kuhol", price: 70.00, img_id: "02"},
                  {name:"Adobong Salagubang", price: 80.00, img_id: "03"},
                  {name:"Pinawikang Kabayo", price: 90.00, img_id: "04"}]
     };

.....

```


## Props - Passing Data To Child Components
Create a function to calculate that takes in a price to recalculate the new total

...
class MenuList extends Component {

    constructor(props) {
      super(props);
      this.state={total:0,
         menuList: [{name:"Buteteng Tugak", price: 50.00, img_id: "00" },
                  {name:"Abuos", price: 60.00, img_id: "01"},
                  {name:"Ginataang Kuhol", price: 70.00, img_id: "02"},
                  {name:"Adobong Salagubang", price: 80.00, img_id: "03"},
                  {name:"Pinawikang Kabayo", price: 90.00, img_id: "04"}]
     };
      this.calcTotal = this.calcTotal.bind(this);
      this.createMenu = this.createMenu.bind(this);
    }

    calcTotal(price) {
      this.setState({total: this.state.total + price})
    }


...
```
I



## ......

Passing Data between child components

Calculate the total of the menu selected.  Create a new component Total with 
value from props total.


```
....
class Total extends Component {
  render() {
    return (
     <h3>Total Bill: Php {this.props.total}</h3> 
     )
  }
}
....

```


## Handling Arrays
We go back to our Array and examine the list.



Inside the render, create a new varaible and loop through the array of items.

```
....
render() {
    var component = this;
    var menus = this.state.menuList.map(
      function(men){
    return(
        <Menu name={men.name}
        price={men.price}
        handleShow={component.showMenu}
        handleTotal={component.calcTotal}
        img_id = {men.img_id}
        />
      );
    }); 

   return(
      
    <div className="container">
      <MenuForm handleCreate={this.createMenu}/>
      <Total total={this.state.total}/>
     {menus}
     </div>
   )    
  }  
}

    ....

    ```








## Handling Forms

To handle forms we will create a new component:  MenuForm with two inputs and add button

```

....
class MenuForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    }
    submit(e){
    e.preventDefault();
    var menu = {
      name:this.refs.name.value,
      price:parseInt(this.refs.price.value
    )};
    this.props.handleCreate(menu);
    //alert(menu.name+ "has been added");
    this.refs.name.value='';
    this.refs.name.value='';
 }

  render() {
    return(
      <form onSubmit={this.submit} class="form-group">
     <div className="container">
     <div className="row">
     
     <div className="col-md-4">
      <input className="form-control" type="text" placeholder="Menu Name" ref="name"/>
     </div>
      
      <div className="col-md-4">
      <input className="form-control" type="text" placeholder="Menu Price" ref="price"/>
       </div>

      <div className="col-md-4">
      <button className="btn btn-success">Add Menu</button>
      </div>
      
      </div>
      </div>
      </form>
      );
    }
}
...
````
Render it below the Total
```

....

render() {
    var component = this;
    var menus = this.state.menuList.map(
      function(men){
    return(
        <Menu name={men.name}
        price={men.price}
        handleShow={component.showMenu}
        handleTotal={component.calcTotal}
        img_id = {men.img_id}
        />
      );
    });  
    

    return(
      
    <div className="container">
      <MenuForm handleCreate={this.createMenu}/>
      <Total total={this.state.total}/>
     {menus}
     </div>
   )    
  }  
}

....
```












