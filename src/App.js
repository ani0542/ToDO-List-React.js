import React,{useState} from 'react';
import Todo from './Todo'
import './App.css';

function App()
{
    const[inputList,setInputList]=useState('')
   
     const[items,setItems]=useState([])
    const itemEvent=(e)=>{
        setInputList(e.target.value)
      
        
    }
    const handle=()=>{
      
      setItems((oldItems)=>{
          return[...oldItems,inputList]
      })
      setInputList('')
    }

    const deleteItem=(id)=>{
        
        setItems((oldItems)=>{
          
               return oldItems.filter((arrElem,index)=>{
                  
                  return index!==id
               })
        })
   }
    return(<>
               <div className='main_div'>
                    <div className='center_div'>
                          <br/>
                          <h1>ToDO List</h1>
                          <br/>
                          <input type='text' placeholder='Add a items' onChange={itemEvent} value={inputList}/>
                          <button onClick={handle}>+</button>
                          <ol>
                                {/* <li>{inputList}</li> */}
                                {
                                    
                                      items.map(function(value,index)
                                      {
                                       
                                        
                                       return ( <Todo  key ={index}  id={index}  onselect={deleteItem} text={value}/>)
                                      })
                                }
                              
                          </ol>
                    </div>
               </div>
    </>)
}
export default App;