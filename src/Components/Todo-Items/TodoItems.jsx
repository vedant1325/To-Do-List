import React from 'react'
import './TodoItems.css'
import cross from '../Assets/cross.png'
import tick from "../Assets/tick.png"
import not_tick from "../Assets/not_tick.png"

const TodoItems = ({no,display,text,setTodos}) => {

const remove=(no)=>{
  let data=JSON.parse(localStorage.getItem('todos'));
  data=data.filter((todo)=>todo.no!==no);
 setTodos(data)
}


  const toggle=(no)=>{
    let data=JSON.parse(localStorage.getItem('todos'));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through";
        }
        else{
          data[i].display="";
        }
        break
         
      }
    }
      setTodos(data)
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
         {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
         
         <div className="todoitems-text">
          {text}
         </div>
      </div>
      <img className='cross_icon' src={cross} alt="" onClick={()=>{remove(no)}} />
    </div>
  )
}

export default TodoItems
