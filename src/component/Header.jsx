/* eslint-disable */
import React from "react";
import List1 from "./List1";

const stylele = {
  img : {
    width : '100px',
    height : '100px' ,

  },

  header : {
    width : '100vw',
    height : '100px' ,
    display : 'flex',
    justifyContent : 'spacebetween',
    backgroundColor : 'aqua',
    alineItem : 'center'

  }
}



function Header(){
  return(
  <div style={stylele.header}>
    <div>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MTZfNjkg%2FMDAxNjU1MzA1MjM4MDg0.MtSzzgz2uZrqNzomYZO_1IEALXvRP4XhMmXfbkBzcWAg.qIbx42g2JktRafH3hYho6upFkK4WIdUoXsAgba2FGPUg.JPEG.krdst%2Fdeviljin-ttt2-art.jpg&type=sc960_832" alt="데빌진" style={stylele.img}/>
    </div>
    <div>
      <List1></List1>
    </div>
  </div>
  )
  
}

export default Header ;