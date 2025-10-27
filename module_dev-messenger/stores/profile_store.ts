import { create } from "zustand";

type ProfileDataT = {
    id: String,
    avatar: String,
    email: String,
    login: String,
    password: String,
    description: String
}

interface useProfileI {
    profileData: ProfileDataT
    updateProfile: (filedName: String, value: String) => void
    // logoutProfile: (id: String) => void
}

export const useProfile = create<useProfileI>((set) => ({
    profileData: {
        id: "",
        avatar: "",
        email: "",
        login: "Логин",
        password: "",
        description: "Описание профиля"
    },

    updateProfile: (filedName, value) => set((state) => {
        let newProfileData = {...state.profileData};
        newProfileData[filedName] = value;
        return {...state, profileData: newProfileData};
    }),

    // logoutProfile: (id) => set(state) => {
    //     return 
    // }
}));
