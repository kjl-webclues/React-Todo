import React, {useState} from 'react'
import img from "./todo.jpg";

const Todo = () => {

const [inputData, setinputData] = useState('');
const [items, SetItems] =useState([]);
const [toggleSubmit, SetToggleSubmit] = useState(true);
const [isEditItem, setIsEditItem] = useState('');

const addItem = () =>{
    if(!inputData){  //display input
        alert('plzz fill the data')
    }else if(inputData && !toggleSubmit) {
        SetItems(
            items.map((val) =>{
                if(val.id === isEditItem){
                return{ ...val, name:inputData}
            }
            return val;
            })
        )

            SetToggleSubmit(true);
            setinputData('');
            setIsEditItem(null);

    }else{

    const allInputData ={ id: new Date().getTime().toString(), name:inputData} //edit element convert time into string
    SetItems([...items, allInputData]); //blank input after type
    setinputData('');
    }
}

//delete the item
 const deleteItem = (index) =>{ //id
    const updatedItem = items.filter((val) =>{ //val, ind
        return index !== val.id; //if index not match with elem .id that display in updateditem
    });
    SetItems(updatedItem);
 }

 //edit item
    // when user click on edit button

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to the change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit.
// 4: To pass the current element Id to new state variable for reference

const editItem = (id) =>{
    let newEditItem = items.find((val) =>{
        return val.id === id
    });
    console.log(newEditItem);
    SetToggleSubmit(false);
    setinputData(newEditItem.name);
    setIsEditItem(id);
}

 //remove all
 const removeAll = () =>{
     SetItems([]);
 }
    return (
        <>
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={img} alt="todologo"/>
                        <figcaption>add your List Here</figcaption>
                    </figure>

                        <div className="addItems">
                            <input 
                                type="text" 
                                placeholder="Add Items..."
                                value={inputData}
                                onChange={(e)=>setinputData(e.target.value)}                                
                                />

                            {
                                //if toggleSubmit is true then display add button and if its falls then dispaly edit
                                toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i> :
                                    <i className="far fa-edit add-btn" title="Update Items" onClick={addItem}></i>
                                
                            }                          
                            
                        </div>

                        <div className="showItems">

                            {
                                items.map((val) =>{
                                    return(
                                        <div className="eachItem" key={val.id}>
                                            <h3>{val.name}</h3>
                                            <div className="todo-btn">
                                                <i className="far fa-edit add-btn" title="Edit Items" onClick={() =>editItem(val.id)}></i> &nbsp;
                                                <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() =>deleteItem(val.id)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                                <br/>
                        {/* clear all button */}
                        <div className="showItems">
                            <button className="btn" data-sm-link-text="Remove All" onClick={removeAll}><span>Remove all</span></button>
                            {/* <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button> */}
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo




























// import React, {useState, useEffect} from 'react'
// import img from "./todo.jpg";

// const Todo = () => { 

// //get the localstoragee data back
// const getLocalData = () =>{
//     const lists = localStorage.getItem("mytodolist");

//     if(lists){
//         return JSON.parse(lists);
//     } else {
//         return[];
//     }
// };

// const [inputData, setinputData] = useState('');
// const [items, SetItems] =useState(getLocalData()); //getlocaldata for get data on list
// const [toggleSubmit, SetToggleSubmit] = useState(true);
// const [isEditItem, setIsEditItem] = useState('');

// const addItem = () =>{
//     if(!inputData){  //if input blank
//         alert('plzz fill the data')
//     }else if(inputData && !toggleSubmit) {
//         SetItems(
//             items.map((val) =>{
//                 if(val.id === isEditItem){
//                 return{ ...val, name:inputData}
//             }
//             return val;
//             })
//         )

//             SetToggleSubmit(true);
//             setinputData('');
//             setIsEditItem(null);

//     }else{

//     const allInputData ={ id: new Date().getTime().toString(), name:inputData} //edit element convert time into string
//     SetItems([...items, allInputData]); //blank input after type
//     setinputData('');
//     }
// }

// //delete the item
//  const deleteItem = (index) =>{ //id
//     const updatedItem = items.filter((val) =>{ //val, ind
//         return index !== val.id; //if index not match with elem .id that display in updateditem
//     });
//     SetItems(updatedItem);
//  }

//  //edit item
//     // when user click on edit button

// // 1: get the id and name of the data which user clicked to edit
// // 2: set the toggle mode to the change the submit button into edit button
// // 3: Now update the value of the setInput with the new updated value to edit.
// // 4: To pass the current element Id to new state variable for reference

// const editItem = (id) =>{
//     let newEditItem = items.find((val) =>{
//         return val.id === id
//     });
//     console.log(newEditItem);
//     SetToggleSubmit(false);
//     setinputData(newEditItem.name);
//     setIsEditItem(id);
// }

//  //remove all
//  const removeAll = () =>{
//      SetItems([]);
//  }

// //  adding localstorage useEffect
// // whenever items's value change after that useEffect work and add data in local storage
// useEffect (() => {
//     localStorage.setItem("mytodolist", JSON.stringify(items));
// }, [items]);


//     return (
//         <>
//         <div>
//             <div className="main-div">
//                 <div className="child-div">
//                     <figure>
//                         <img src={img} alt="todologo"/>
//                         <figcaption>add your List Here</figcaption>
//                     </figure>

//                         <div className="addItems">
//                             <input 
//                                 type="text" 
//                                 placeholder="Add Items..."
//                                 value={inputData}
//                                 onChange={(e)=>setinputData(e.target.value)}                                
//                                 />

//                             {
//                                 //if toggleSubmit is true then display add button and if its falls then dispaly edit
//                                 toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i> :
//                                     <i className="far fa-edit add-btn" title="Update Items" onClick={addItem}></i>
                                
//                             }                          
                            
//                         </div>

//                         <div className="showItems">

//                             {
//                                 items.map((val) =>{
//                                     return(
//                                         <div className="eachItem" key={val.id}>
//                                             <h3>{val.name}</h3>
//                                             <div className="todo-btn">

//                                                 <i className="far fa-edit add-btn" 
//                                                     title="Edit Items" 
//                                                     onClick={() =>editItem(val.id)}></i>

//                                                 <i className="far fa-trash-alt add-btn" 
//                                                     title="Delete Items" 
//                                                     onClick={() =>deleteItem(val.id)}></i>
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }
                            
//                         </div>

//                         {/* clear all button */}
//                         <div className="showItems">
//                             {/* <button className="btn" data-sm-link-text="Remove All" onClick={removeAll}><span>Remove all</span></button> */}
//                             <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
//                         </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Todo
