import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [{ id: 1, likesCount: 5, message: 'Hi, how are you?' },
        { id: 2, like: 10, message: "It's my first post" },
        { id: 3, like: 11, message: "Blabla" },
        { id: 4, like: 11, message: "Dada" },],

    },
    newPostText: 'it-kamasutra.com',

    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Valera' },
            { id: 6, name: 'Kostya' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
        ]
    }
}

window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {


    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}


export default state