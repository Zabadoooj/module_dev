import { create } from "zustand"

type MessageT = {
    id: String,
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
    messages: [],

    createMessages: (data) => set((state) => {
        return {...state, messages: [...state.messages, data]}
    }),

    removeMessages: (id) => set((state) => {
        return {...state, messages: state.messages.filter((value) => value.id != id)}
    })

    
}))