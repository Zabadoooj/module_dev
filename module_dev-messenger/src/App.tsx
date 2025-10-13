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

type userCardProps = {
  userName: String;
  userDesc?: String;
}

const Input = (props: InputProps) => {
  return (
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
    <div className="button" style={{ backgroundColor: props.backroungColor }}>
      {props.title}
    </div >
  )
}

const UserCard = (props: userCardProps) => {
  return (
    <div className="user-card">
      <div className="user-avatar"></div>
        <div className="user-data">
          <div className="user-name">{props.userName}</div>
          <div className="user-desc">{props.userDesc}</div>
        </div>
    </div>
  )
}

function App() {

  return (
    <>
      <main>
        <div className="film-creation-form">
          <div className="text">Text</div>
          <Input alias={"Логин"} textAlias={"Введите логин"} />
          <Input alias={"Почта"} textAlias={"Введите почту"} />
          <Input alias={"Пароль"} textAlias={"Введите пароль"} />
          <Input alias={"Описание (не обязательно)"} textAlias={"Введите описание"} />

          <Button title={"Button"} backroungColor={"white"} />
        </div>

        <UserCard userName={"Name"} userDesc={"Desc"} />
      </main>
    </>
  )
}

export default App
