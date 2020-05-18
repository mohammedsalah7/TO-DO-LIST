import React  ,{Component}  from 'react';
 import TodoItems from "./components/todoitems/todoitems";
 import AddItems from "./components/Addaitems/Additems"

class App extends Component {

  state = {
    items : [
      {id:1, name:'moh' , age: 24},
      {id:2, name:'salah' , age: 22},
      {id:3, name:'sami' , age: 63}
    ]
  }


  deleteItem = (id) =>{
let items = this.state.items;
let i =items.findIndex(items=>items.id === id )
items.splice(i,1)
this.setState({items})
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items}) 
    console.log (items)

  }
  render (){
    return (
      <div className="App-contanier">
        <h1 className ="text-center"> TO DO LIST</h1>
        <TodoItems  items ={this.state.items}   deleteItem= {this.deleteItem}/>  
        <AddItems  addItem ={this.addItem} />      
      </div>
  

  );
}
}
export default App;
