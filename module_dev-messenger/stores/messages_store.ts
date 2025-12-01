import { create } from "zustand"
import { v4 } from "uuid"
import dayjs from "dayjs"


export type MessageT = {
    messageid: String,
    senderId: String,
    chatId: String,
    senderName: String,
    senderAvatar: String,
    messageText: String,
    sendedAt: String
}

export type CreateMessage = Omit<MessageT, 'messageid' | 'sendedAt'>


interface MessagesStoreI {
    messages: MessageT[]
    createMessages: (data: CreateMessage) => void
    removeMessages: (id: String) => void
}

export const useMessagesStore = create<MessagesStoreI>((set) => ({
    messages: [
        // {messageid:"0", senderId:"0", chatId:"0", senderName:"senderName",senderAvatar:"url",messageText:"Hello world", sendedAt:"14:00"},
        // {messageid:"1", senderId:"0", chatId:"0", senderName:"senderName",senderAvatar:"url",messageText:"Длинное сообщениеееееееееееееееееееееее", sendedAt:"14:00"},
        // {messageid:"2", senderId:"0", chatId:"0", senderName:"senderName",senderAvatar:"url",messageText:"Последнее сообщение", sendedAt:"14:00"},

        // {messageid:"3", senderId:"1", chatId:"0", senderName:"Someone",senderAvatar:"url",messageText:"Hello world", sendedAt:"14:30"},
        // {messageid:"4", senderId:"1", chatId:"0", senderName:"Someone",senderAvatar:"url",messageText:"Длинное сообщениееееееееееееееееееееееееее", sendedAt:"14:30"},
        // {messageid:"5", senderId:"1", chatId:"0", senderName:"Someone",senderAvatar:"url",messageText:"Последнее сообщение", sendedAt:"14:30"}
    ],

    createMessages: (data) => set((state) => {
        return {...state, messages: [...state.messages, {...data, messageid: v4(), sendedAt: dayjs(new Date())}]}
    }),

    removeMessages: (id) => set((state) => {
        return {...state, messages: state.messages.filter((value) => value.messageid != id)}
    })

    
}))