import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './Data/tabs';

function App() {

 let [todolist,setTodolist]=useState([])
 let [activeTab,setActiveTab]=useState(0)
 let [activeContent,setActiveContent]=useState(tabs[activeTab])


let changeData=(index)=>{
  setActiveTab(index)
  setActiveContent(tabs[index])
}



let saveToDoList=(event)=>{
  let toname=event.target.toname.value;
    
  if(!todolist.includes(toname)){
    let finalTodoList=[...todolist,toname]
    setTodolist(finalTodoList)
  }else{
    alert("To Do already Exists");
  }
   event.preventDefault();
}

let list=todolist.map((value,i)=>{
    return(
      <ToDoListItems  value={value} key={i} indexNumber={i} todolist={todolist} setTodolist={setTodolist} />
    )
})


  return (
    <div className="App">

  <div className='tabsouter'>
   <h1 style={{textAlign:'left'}}>Goos Morning Danesh</h1>
   <ul>
    {tabs.map((tabsItem,index)=>{
      return(
        <li>
      <button className={activeTab==index ? 'activebutton' : ''} onClick={()=>changeData(index)}>{tabsItem.title}</button>
    </li>
      )
    })}
    
   

   </ul>
   {activeContent!==undefined ? 
   <p>
      {activeContent.description}
      
    </p>
    : '' }
</div>


      <h1>To Do List</h1>
      <form onSubmit={saveToDoList}> 
        <input type="text" name="toname"/> <button>Save</button>
      </form>
      <div className='outerDiv'>
      <ul>
        {list}
      

      </ul>
      </div>
    </div>
  );
}

export default App;


function ToDoListItems({value,indexNumber,todolist,setTodolist}){
  let [status, setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
  }
  
  let checkstatus=()=>{
   setStatus(!status)
  }

  return(
    <li onClick={checkstatus} className={(status) ? "completetodo" : ''}>{indexNumber} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
