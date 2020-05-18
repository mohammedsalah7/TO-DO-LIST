 import React , {Component} from "react";
 import './Additems.css';
 

  class AddItems extends Component {
      state ={
          name: '', 
          age : ''
      }

     handlechange = (e) =>{
         this.setState({
            [e.target.id] : e.target.value
         });
       
     }

     handlesubmit = (e) =>{
         e.preventDefault();
         if(e.target.name.value === ''){
             return false ;

         }else{
            this.props.addItem(this.state)
            this.setState({
                name : '',
                age : ''
            })
        }
         }
         
      render (){
          return(
                     <div className="Add">
                         <form  onSubmit={this.handlesubmit}>

                             <input  type="text"   placeholder="Enter name ..." id="name"  onChange={this.handlechange}   value ={this.state.name}/ >
                             <input  type="number" placeholder ="Enter Age..." id ="age"  onChange={this.handlechange}  value = {this.state.age} / >
                             <input  type="submit"  value="Add"/ > 

                         </form>

                     </div>
          )
      }
  }


  export default AddItems ;

