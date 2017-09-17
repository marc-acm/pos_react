import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {qty:0};
    this.add = this.add.bind(this);
    this.show = this.show.bind(this);
    this.less = this.less.bind(this);

  }

  add() {
    if (this.props.qty !== 0) {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price); 
  }
}

  show() {
   this.props.handleShow(this.props.name);
   this.props.handleShow(this.props.image);
    }
  
  less() {
    if (this.state.qty !== 0){
    this.setState({qty: this.state.qty - 1});
    this.props.handleTotal(-this.props.price); 
  }
}


  render() {
    return (
      <div className="col col-md-3 col-xs-12">
           <div className="img-rounded">
             <a href="#" onClick={this.add}> <img src = {process.env.PUBLIC_URL + 'img/img'+ this.props.img_id +'.png'} alt = "Menu Image"/></a>
             <p>{this.props.name} = Php {this.props.price}</p>
             <button className="btn btn-primary" onClick={this.show}>Show</button>
           </div>

      <button className="btn btn-primary" onClick={this.less}>-</button>
      <h3>{this.state.qty}</h3>
      <h3>Php {this.state.qty*this.props.price}</h3>
     
      </div>
    );
  }
}



class Total extends Component {
   constructor(props) {
    super(props);
    this.state = {qty:0};
  }
  render() {
    return( 
    <div>
       <h4>Ordered Items: </h4>
         <div>
         <p>{this.props.name}</p>
          </div>
       <p> {this.state.qty} </p>
       <h3>Php {this.state.qty*this.props.price}</h3>       
        <button className="btn btn-primary" onClick={this.less}>-</button>
        <h3>Total Bill: Php {this.props.total}</h3>
     </div>
    );

  }
}



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
  
    }

    calcTotal(price) {
      this.setState({total: this.state.total + price})
    }

    showMenu(name) {
     alert("Your are buying" +name);
    }

 

  render() {
    var component = this;
    var menus = this.state.menuList.map(
      function(men){
    return(
        <Menu name={men.name} price={men.price}
        handleShow={component.showMenu}
        img_id = {men.img_id}
        handleTotal={component.calcTotal} 
        />   
    );
  });  
    return(
      <div className="row">
         <div className="col-3">
         <Total total={this.state.total}/>
         </div>
      
         <div className="col-9">
          <div className = "row">
          {menus}
          </div>
        </div>
      </div>
   )    
  }  
}


class App extends Component {
  render() {
    return (

<div className="container">
      <div className="App">
       <center><img src="/eatifyoudare.png" class="img-responsive" id="logo"/></center>
        <div>
    
   <br/><br/>
         <p className="App-intro"> </p>
        </div> 
      <MenuList/>
      </div>
      </div>
    );
  }
}



export default App;




