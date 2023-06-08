let handleCommentsForm = async (event) => {
    event.preventDefault();

    let commentCuerpo = document.querySelector('#body-comment').value.trim();
    let postId = document.querySelector('#postId').value.trim();

    if (commentCuerpo && postId) {
        let response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({commentCuerpo, postId}),
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
.querySelector('#comment-form')
.addEventListener('submit', handleCommentsForm);