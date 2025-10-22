import { useShallow } from 'zustand/shallow'
import './App.css'
import { useProfile } from '../stores/profile_store'
import { useState } from 'react'

type InputProps = {
  alias: String
  textAlias: String
  defaultValue?: String
  onChange?: React.FormEventHandler<HTMLDivElement>
}

type ButtonProps = {
  title: String
  backroungColor?: String
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const Input = (props: InputProps) => {
  const [currentInput, setCurrentInput] = useState<string>('')

  return (
    <div className="input">
      <div className="input-name">
        {props.alias}
      </div>
      <div style={{
        fontSize: "0.5em",
        color: "rgb(129 129 129)",
        position: "relative",
        left: "13px",
        marginBottom: "3px"
      }}>
        {!currentInput?"Ведите значение":null}
      </div>
      <div className="inputbox" contentEditable onInput={
        e=> {
          props.onChange(e)
          setCurrentInput(e.target.innerText)
        }}>
          
        </div>
    </div>
  )
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button" style={{ backgroundColor: props.backroungColor }} onClick={props.onClick}>
      {props.title}
    </div >
  )
}

const UserCard = (props: userCardProps) => {

  const {profileData} = useProfile(useShallow(state => ({
    profileData: state.profileData
  })))

  return (
    <div className="user-card">
      <div className="user-avatar">UserAvatar</div>
        <div className="user-data">
          <div className="user-name">{profileData.login}</div>
          <div className="user-desc">{profileData.description}</div>
          <div className="add-friend-button">Добавить в друзья</div>
        </div>
    </div>
  )
}

function App() {
  const {profileData, updateProfile} = useProfile(useShallow(state => ({
    profileData: state.profileData,
    updateProfile: state.updateProfile
  }) ))

  console.log(profileData, updateProfile)

  return (
    <>
      <main>
        <div className="film-creation-form">
          <div className="text">Text</div>

          <div style={{
            flexDirection: "column",
            display: "flex",
            width: "90%",
            gap: "30px"
          }}>
          <Input alias={"Логин"} textAlias={"Введите логин"} onChange={e => updateProfile("login", e.target.innerText)}/>
          <Input alias={"Почта"} textAlias={"Введите почту"} />
          <Input alias={"Пароль"} textAlias={"Введите пароль"} />
          <Input alias={"Описание (не обязательно)"} textAlias={"Введите описание"} onChange={e=> updateProfile("description", e.target.innerText)}/>
          </div>

          <Button title={"Button"} backroungColor={"white"} onClick={e => console.log(profileData)}/>
        </div>

        <UserCard />
      </main>
    </>
  )
}

export default App
