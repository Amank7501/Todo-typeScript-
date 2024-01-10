import React,{FC,ChangeEvent} from 'react'

import  { useState } from "react";

enum options{
    red="Hi, red haired shanks",
    blue= "Cool buddy",
    black = "whatssup nigga"
}

interface Props{
    name: string;
    age: number;
    email: string;
    
}

const ChangeHandle:FC<Props> = ({name,email,age}) => {
    return <div>Hii {name} and im {age} years old and my email is {email}</div>
}



export const User:FC<Props>= (props) => {
    
    const [val,setVal] = useState<string>("")
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
            setVal(e.target.value);
    }

    type NameType = "Aman" | "Ankit"
    const nameallowed:NameType ="Aman"
  return (
  <div>
    <h1>Name: {props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
    <input type="text" placeholder="Enter anything" onChange={handleChange} />
    <h3>{val}</h3>
    <h2>color:{options.red}</h2>
    <h2>{nameallowed}</h2>
    <ChangeHandle  name="Ankit" age={24} email="ankit@gamil.com"/>
  </div>
    
  )
}

