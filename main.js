// Initializing variables
const NavEl = document.getElementById('nav')
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const fetchData = (url) => {
    return fetch(url)
        .then(
            response => {
                if (!response.ok) {
                    throw Error('Error')
                }
                return response.json()
            })
}

const renderUsers = (users) => {
    return fetchData(users).then(userData => {
        userData.forEach(user => {//Create dropdown button divs with correct usernames
            NavEl.innerHTML += `<div class="dropdown" id =${user.id}><button class="dropbtn">${user.username}</button><div class="dropdown-content"></div>`
        })
    })
}
function renderData(users,posts){
        renderUsers(users).then(() => {
            fetchData(posts)
            .then(postData => {
                    postData.forEach(post => {//add the dropdown posts to the correct user
                        searchUserbyId(post).innerHTML +=`
                            <button >
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                            </button>`
                        }
                )
                })
        })
}
const searchUserbyId = (post) => {// finds the user div by userId of post and returns the dropdown-content div
    return document.getElementById(`${post.userId}`).getElementsByClassName('dropdown-content')[0]
}


//Run program
renderData(USERS_URL, POSTS_URL)