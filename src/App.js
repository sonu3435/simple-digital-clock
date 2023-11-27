import React, { useState } from "react";

const App = () => {

  const [time, ctime] = useState(new Date().toLocaleTimeString())
  const [date, cdate] = useState(new Date().toLocaleDateString())


  const upDateTime = () => {
    ctime(new Date().toLocaleTimeString())
    cdate(new Date().toLocaleDateString())
  }

  setInterval(upDateTime,1000)

  return( <>
  <div>
    <h1>{time}</h1>
    <h2>{date}</h2>
    </div>
     </>
  )
 
}

export default App;