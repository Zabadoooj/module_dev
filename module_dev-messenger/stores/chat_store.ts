import { create } from "zustand";

type chatsT = {
    id: String,
    chatUser: String,
    chatAvatar: String,
    lastMessage: String
}

interface useChatI {
    chatList: chatsT[]
    createChat: (chats: chatsT) => void
    removeChat: (chatId: String) => void
}

export const useChatStore = create<useChatI>((set) => ({
    chatList: [],

    createChat: (chatInfo) => set((state) => {
        if(chatInfo.chatUser != "")
        return {...state, chatList: [...state.chatList, chatInfo]}
    }),

    removeChat: (chatId) => set((state) => {
        return {...state, chatList: state.chatList.filter((value) => value.id != chatId)}
    })

}))