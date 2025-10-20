import { create } from "zustand";

type ProfileDataT = {
    avatar: string,
    login: string,
    password: string,
    description: string
}

interface useProfileI {
    profileData: ProfileDataT
    updateProfile: (filedName: string, value: string) => void
}

export const useProfile = create<useProfileI>((set) => ({
    profileData: {
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
    })
}));
