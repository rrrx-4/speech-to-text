const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    const formData = new FormData(event.target);

    const response = await fetch('http://localhost:5000/audio', {
        method: 'POST',
        body: formData
    });

    const text = await response.json();

    document.querySelector(".transcribe-text").innerHTML = text.transcribe;
    document.querySelector(".accuracy").innerHTML = text.accuracy
    console.log(text); // response from server

    fileInput.value = ''
});
