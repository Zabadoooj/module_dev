import { create } from "zustand"

type MessageT = {
    senderId: Number,
    chatId: Number,
    senderName: String,
    senderAvatar: String,
    messageText: String
}

interface MessagesStoreI {
    messages: MessageT[]
    createMessages: (data: MessageT) => void
}

export const useMessagesStore = create<MessagesStoreI>((set) => ({
    messages: [],

    createMessages: (data) => set((state) => {
        return {...state, messages: [...state.messages, data]}
    })
}))