'use client'

import { myData } from '@/lib/dataFetch'
import React, { useState } from 'react'

const Getdatabutton = () => {
    console.log("component is rendering");

    const [data, setData] = useState("Here is your text");

    const handleClick = async () => {
        console.log("Function is running");
        setData(await myData());
    }

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        <p>{data}</p>
    </div>
  )
}

export default Getdatabutton