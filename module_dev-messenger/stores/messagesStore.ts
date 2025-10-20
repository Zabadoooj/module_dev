import { create } from "zustand"

interface MessagesStoreI {
    message
}

const useMessagesStore = create<MessagesStoreI>((set) => ({

}))