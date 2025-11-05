import { create } from "zustand"

type MessageT = {
    messageid: String,
    senderId: String,
    chatId: String,
    senderName: String,
    senderAvatar: String,
    messageText: String
}

interface MessagesStoreI {
    messages: MessageT[]
    createMessages: (data: MessageT) => void
    removeMessages: (id: String) => void
}

export const useMessagesStore = create<MessagesStoreI>((set) => ({
    messages: [
        {messageid:"0", senderId:"0", chatId:"0", senderName:"senderName",senderAvatar:"url",messageText:"Hello world"},
        {messageid:"1", senderId:"0", chatId:"0", senderName:"senderName",senderAvatar:"url",messageText:"Длинное сообщениеееееееееееееееееееееее"},
        {messageid:"2", senderId:"0", chatId:"0", senderName:"senderName",senderAvatar:"url",messageText:"Последнее сообщение"},

        {messageid:"3", senderId:"1", chatId:"0", senderName:"Someone",senderAvatar:"url",messageText:"Hello world"},
        {messageid:"4", senderId:"1", chatId:"0", senderName:"Someone",senderAvatar:"url",messageText:"Длинное сообщениееееееееееееееееееееееееее"},
        {messageid:"5", senderId:"1", chatId:"0", senderName:"Someone",senderAvatar:"url",messageText:"Последнее сообщение"}
    ],

    createMessages: (data) => set((state) => {
        return {...state, messages: [...state.messages, data]}
    }),

    removeMessages: (id) => set((state) => {
        return {...state, messages: state.messages.filter((value) => value.messageid != id)}
    })

    
}))