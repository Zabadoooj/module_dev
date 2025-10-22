import './Messenger.css'
import { useShallow } from 'zustand/shallow'
import { useMessagesStore } from '../stores/messagesStore'

type UserDataT = {
    userName: String
    userDescription: String
}

const UserData = (props: UserDataT) => {
    return (
        <div className="usercardBox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s" alt="avatar" />
                    <div className="info">
                        <div className="userData">
                            <div className="username">{props.userName}</div>
                            <div className="descripton">{props.userDescription}</div>
                        </div>
                    </div>

            <button>...</button>
        </div>
    )
    
}


type ChatItemT = {
    senderAvatar?: String
    senderName: String
    lastMessage: String
    backroundColor?: String
}

const ChatItem = (props:ChatItemT) => {
    return (
        <div className="chatbox">
            <div className="chat">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s" alt="avatar" />
                
                <div className="info">
                    <div className="chatName"><b>{props.senderName}</b></div>
                    <div className="lastMessage">{props.lastMessage}</div>
                </div>
            </div>
        </div>
    )
}








function Messenger() {
    
    return(
        <>
        <main>
        <div className="leftBox">
            <UserData userName={"Ваше имя"} userDescription={"Ваше описание"} />


            <div className="chat_listbox">
                <div className="chat_list">

                    <ChatItem senderName={"Имя Пользователя"} lastMessage={"Последнее сообщение"} />
                    <ChatItem senderName={"Имя2"} lastMessage={"Халоу"} />
                    <ChatItem senderName={"Имя3"} lastMessage={"Пока"} />
                    <ChatItem senderName={"Имя4"} lastMessage={"Last Message"} />

                    


                    
                </div>
            </div>
        </div>


        <div className="messangerMainBox">
            <div className="mainChatBox">


                <div className="tabsMainbox">
                    <div className="tabsList">
        
                        <div className="tab">
                            <div className="text">ChatName</div>
                            <button className="close">X</button>
                        </div>
                        <div className="tab SelectedTab">
                            <div className="text">SelectedChat</div>
                            <button className="close">X</button>
                        </div>

                        <div className="addTab">
                            <button>+</button>
                        </div>
        
                    </div>
                </div>

                <div className="mockBlock-top"></div>

                <div className="message_wrapper sended_msg">
                    <div className="message">
                        <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s" alt="avatar" />
                        <div className="message_content">
                            <div className="firstMessage">Короткое сообщение какое-нибудь</div>
                            <div className="secondMessage">Длинное сообщение всякое, тут много текста, просто потому что. Не знаю что ещё написать, по этому продолжу писать всякий бред чтоб заполнить пространство</div>
                            <div className="lastMessage">Последнее сообщение. Ну всё, бывай</div>
                        </div>
                    </div>
                </div>

                <div className="message_wrapper recived_msg">
                    <div className="message">
                        <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s" alt="avatar" />
                        <div className="message_content">
                            <div className="firstMessage">Короткое сообщение какое-нибудь</div>
                            <div className="secondMessage">Длинное сообщение всякое, тут много текста, просто потому что. Не знаю что ещё написать, по этому продолжу писать всякий бред чтоб заполнить пространство</div>
                            <div className="lastMessage">Последнее сообщение. Ну всё, бывай</div>
                        </div>
                    </div>
                </div>

                <div className="mockBlock-bottom"></div>
            </div>

            <div className="sendMessageBox blured">
                <div contentEditable className="sendInputBox"></div>
                <button>Send</button>
            </div>

        </div>


        <div className="right_box">
            <div className="selector">
                <div className="buttons">
                    <button>Profile</button>
                    <button>Emoji</button>
                    <button>GIF</button>
                </div>
            </div>

            <div className="rightbox_info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s" alt="avatar" />
                <div>
                    ChatName <br/>
                    Description
                </div>

                <div className="buttons">
                    <button>Заглушить</button>
                    <button>Закрепленные</button>
                    <button className="block_user">Заблокировать</button>
                </div>
            </div>
        </div>
        
    </main>
        </>
    )
}

export default Messenger