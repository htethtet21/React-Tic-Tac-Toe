import { useState } from "react";

export default function Player({initialName,symbol,isActive}) {
   const [isEditing,setisEditing]= useState(false);
  const[updateName,setupdateName]=useState(initialName);
   function handleEdit() {
    setisEditing((editing)=>!editing);
   }
   function handleUpdateName(event){
    setupdateName(event.target.value);
   }
   let playerName=<span className="player-name">{updateName}</span>;
   let btnCaption='Edit';
   if(isEditing){
    playerName=<input type="text" required value={updateName} onChange={handleUpdateName}></input>
    btnCaption='Save';
   }
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
            {playerName}
            <span className="player-symb">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{btnCaption}</button>
          </li>

    );
}