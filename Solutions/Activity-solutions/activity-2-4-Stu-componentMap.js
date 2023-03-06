import React from "react";

function List({ groceries }) {

  let example = [ <li>test</li>,<li>test2</li>, <li>test3</li>]


  return (
    <ul className="list-group">

      {groceries.map(item => {

        return <li key ={item.id} >{item.name}</li>


      })}
    
    </ul>
  );
}

export default List;
