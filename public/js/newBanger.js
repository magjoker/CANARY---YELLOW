let newBangerFormHandler = async (event) => {
    event.preventDefault();

    let title = document.querySelector('#title-post').value.trim();
    let body = document.querySelector('#body-post').value.trim();

    if (title && body) {
        let response = await fetch('/api/posts', {
            method: 'POST',
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

    document
        .querySelector('#new-banger-form')
        .addEventListener('submit', newBangerFormHandler);
