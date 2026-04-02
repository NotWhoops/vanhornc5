'use client'

import { myData, myData2, myData3, myData4, myData5, myData6 } from '@/lib/dataFetch'
import React, { useState } from 'react'

const Getdatabutton = () => {
    console.log("component is rendering");

    const [data, setData] = useState("Here is your text");
    const [data2, setData2] = useState("Here is your text");
    const [data3, setData3] = useState("Here is your text");
    const [data4, setData4] = useState("Here is your text");
    const [data5, setData5] = useState("Here is your text");
    const [data6, setData6] = useState("Here is your text");

    const handleClick = async () => {
        console.log("Function is running");
        setData(await myData());
    }
    const handleClick2 = async () => {
        console.log("Function is running");
        setData(await myData2());
    }
    const handleClick3 = async () => {
        console.log("Function is running");
        setData(await myData3());
    }
    const handleClick4 = async () => {
        console.log("Function is running");
        setData(await myData3());
    }
    const handleClick5 = async () => {
        console.log("Function is running");
        setData(await myData4());
    }
    const handleClick6 = async () => {
        console.log("Function is running");
        setData(await myData5());
    }
    const handleClick7 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick8 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick9 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick10 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick11 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick12 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick13 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick14 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick15 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick16 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick17 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick18 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick19 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick20 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick21 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick22 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick23 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick24 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }
    const handleClick25 = async () => {
        console.log("Function is running");
        setData(await myData6());
    }

  return (
    <div>
        <p>{data}</p>
    </div>
  )
}

export default Getdatabutton