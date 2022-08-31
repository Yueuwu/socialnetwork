let rerenderEntireTree = () => {}
const State = {
    dialogsData: [
        {name: 'Vera', id:'Vera'},
        {name: 'Vlad', id:'Vlad'},
        {name: 'Sasha', id:'Sasha'},
        {name: 'Igor', id: 'Igor'},
        {name: 'Vova', id: 'Vova'},
        {name: 'Achyty', id: 'Achyty'},
        {name: 'Nastya', id: 'Nastya'},
        {name: 'Masha', id: 'Masha'},
    ],
    posts: [
        {id: 1, body: "It is my first post!!!", likes: 101},
        {id: 2,body: "It is my second post :)))))", likes: 98},
        {id: 3,body: "It is my third post!!! ;))", likes: 87},
        {id: 4,body: "Sad :(", likes: 91},
        {id: 5,body: "Cucumber is so nice in my ass!", likes: 127000000000},
        {id: 1, body: "It is my first post!!!", likes: 101},
        {id: 2,body: "It is my second post :)))))", likes: 98},
        {id: 3,body: "It is my third post!!! ;))", likes: 87},
        {id: 4,body: "Sad :(", likes: 91},
        {id: 5,body: "Cucumber is so nice in my ass!", likes: 127000000000},
        {id: 1, body: "It is my first post!!!", likes: 101},
        {id: 2,body: "It is my second post :)))))", likes: 98},
        {id: 3,body: "It is my third post!!! ;))", likes: 87},
        {id: 4,body: "Sad :(", likes: 91},
        {id: 5,body: "Cucumber is so nice in my ass!", likes: 127000000000},
        {id: 1, body: "It is my first post!!!", likes: 101},
        {id: 2,body: "It is my second post :)))))", likes: 98},
        {id: 3,body: "It is my third post!!! ;))", likes: 87},
        {id: 4,body: "Sad :(", likes: 91},
        {id: 5,body: "Cucumber is so nice in my ass!", likes: 127000000000},
    ],
    newPostText: '',
    newMessageText: '',
    messages: [
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'},
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'},
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'},
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'},
        {id: 1, message: 'hui'},
        {id: 2, message: 'nehui'},
        {id: 3, message: 'opa'},
        {id: 4, message: 'dagnropa'},
    ]

}
export const addPost = () => {
    let newPost = {
        id: Date.now(),
        body: State.newPostText,
        likes: 0
    };
    if(newPost.body.trim() !== '') {
        State.posts.unshift(newPost)
        rerenderEntireTree(State)
        State.newPostText = ''
    }
}

export const updateNewPostText = (newText) => {
    State.newPostText = newText;
    rerenderEntireTree(State)
}

export const addMessage = (message) => {
    let newMessage = {
        id: Date.now(),
        message: State.newMessageText,
    };
    if(newMessage.message.trim() !== '') {
        State.messages.unshift(newMessage)
        rerenderEntireTree(State)
        State.newMessageText = ''
    }
}
export const updateNewMessageText = (newText) => {
    State.newMessageText = newText;
    rerenderEntireTree(State)
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default State