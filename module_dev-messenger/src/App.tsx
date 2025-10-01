// import { useState } from 'react'
import './App.css'

type InputProps = {
  alias: String;
  textAlias: String;
  defaultValue?: String;
}

type ButtonProps = {
  title: String;
  backroungColor?: String;
}

const Input = (props: InputProps) => {
  return(
    <div className="input">
      <div className="input-name">
        {props.alias}
      </div>
      <div className="inputbox" contentEditable>
        {props.textAlias}
      </div>
    </div>
  )
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button">
      {props.title}
      
    </div>
  )
}

function App() {

  return (
    <>
      <div className="film-creation-form">
        <div className="text">Text</div>
        <Input alias={"Логин"} textAlias={"Введите логин"}/>
        <Input alias={"Почта"} textAlias={"Введите почту"}/>
        <Input alias={"Пароль"} textAlias={"Введите пароль"}/>
      </div>
    </>
  )
}

export default App
