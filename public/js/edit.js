let editPostNegotiation = async (event) => {
    event.preventDefault();

    let title = document.querySelector('#e-title-post').value.trim();
    let body = document.querySelector('#e-body-post').value.trim();
    let postId = document.querySelector('#postId').value.trim();

    if (title && body && postId) {
        let response = await fetch('/api/posts' + postId, {
            method: 'PUT',
            body: JSON.stringify({title, body}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert(response.statusText);
        }
    }
};


let deletePost = async () => {
    let postId = document.querySelector('#postId').value.trim();

    if (postId) {
        let response = await fetch('/api/posts' + postId, {
            method: 'DELETE',
            body: JSON.stringify({postId}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert(response.statusText);
        }
    }
};


document
.querySelector('#edit-form')
.addEventListener('submit', editPostNegotiation);

document
.querySelector('#delete-btn')
.addEventListener('submit', deletePost);