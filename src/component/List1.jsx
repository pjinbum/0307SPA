import React from "react";

const stylle = {
  listStyle: {
    color: "black" ,
    listStyle: 'none'
   
  },
};

function List1() {
  const listMenu = [
    { menu: "About PJB" },
    { menu: "TAKKEN and PJB" },
    { menu: "Fight Round" },
  ];

  return (
    <div>
      {listMenu.map(function (i , index) {
        
        return <li key={index} style={stylle.listStyle}>{i.menu}</li>;
      })}
    </div>
  );
}

export default List1;
