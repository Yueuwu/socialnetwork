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
export let addPost = (postMessage) => {
    let newPost = {
        id: Date.now(),
        body: postMessage,
        likes: 0
    };
    State.posts.push(newPost)
}

export default State