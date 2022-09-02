let store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
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
    },
    _callSubscriber(){},
    getState() {
        return this._state;
    },
    _addPost(){
        let newPost = {
            id: Date.now(),
            body: this._state.profilePage.newPostText,
            likes: 0
        };
        if(newPost.body.trim() !== '') {
            this._state.profilePage.posts.unshift(newPost)
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = ''
        }
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    addMessage(message){
        let newMessage = {
            id: Date.now(),
            message: this._state.dialogPage.newMessageText,
        };
        if(newMessage.message.trim() !== '') {
            this._state.dialogPage.messages.unshift(newMessage)
            this._callSubscriber(this._state)
            this._state.dialogPage.newMessageText = ''
        }
    },
    updateNewMessageText(newText){
        this._state.dialogPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        if(action.type === 'ADD_POST'){
            this._addPost()
        } else if (action.type === 'UPDATE_NEW_POST_TEXT'){
            this._updateNewPostText(action.newText)
        }
    }
}

export default store