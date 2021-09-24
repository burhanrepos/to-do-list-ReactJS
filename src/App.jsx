import React, { useState } from "react";
import List from "./List";
const App = () => {
    //useStates
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const inputHandle = (event) => {
        setInput(event.target.value);
    }
    const addItem = (event) => {
            setItems(olditems => {
                return [
                    ...olditems,
                    input
                ];
            });
            setInput("");        
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ');
          setItems(olditems => {
            return [
                ...olditems,
                input
            ];
        });
        setInput("");   
        }
      }
    const deleteItem = (id) => {
        setItems(olditems => {
            return olditems.filter((value, index) => {
                return id !== index;
            })
        })
    }
    const clearAll=()=>{
        setItems(olditems => {
            return olditems.filter((value, index) => {
                return 1 !== 1;
            })
        })
    }

    return (
        <>
            <br />
            <h1>To Do List</h1>
            <br />
            <div className="add-item">
                <input type="text" maxLength="15" placeholder="New Task" onKeyPress={handleKeyPress} onChange={inputHandle} value={input} size="20" />
                <button onClick={addItem} className="add-btn" >Add Task</button>
            </div>
            <button className="clear" onClick={clearAll}>Clear All</button>
            <ol className="list">
                {
                    items.map((value, index) => {
                        return <List key={index} id={index} text={value} onDelete={deleteItem} />
                    })
                }
            </ol>
            
        </>
    );
}
export default App;