import { create } from "zustand";

type ProfileDataT = {
    id: String,
    avatar: String,
    login: String,
    password: String,
    description: String
}

interface useProfileI {
    profileData: ProfileDataT
    // updateProfile: (filedName: String, value: String) => void
    // logoutProfile: (id: String) => void
}

export const useProfileStore = create<useProfileI>((set) => ({
    profileData: {
        id: "0",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s",
        login: "СупермегаПользователь 2007",
        password: "testPassword123",
        description: "Очень крутое описание профиля для самой лучшей соц.сети"
    },

    // updateProfile: (filedName, value) => set((state) => {
    //     let newProfileData = {...state.profileData};
    //     newProfileData[filedName] = value;
    //     return {...state, profileData: newProfileData};
    // }),


    // logoutProfile: (id) => set(state) => {
    //     return 
    // }
}));
