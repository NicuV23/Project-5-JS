function showtheword() {
    const boxone = document.getElementById('input-1');
    const boxtwo = document.getElementById('input-2');
    const displayArea = document.getElementById('displayArea');

    const word = boxone.value;
    const definition = boxtwo.value;

    if (word && definition) {
        const newEntry = document.createElement('div');
        newEntry.innerHTML = `<div><h1>${word}:</h1><h4>${definition}</h4><button onclick="deleteEntry(this)">Delete</button></div>`;
        displayArea.appendChild(newEntry);

        // Clear the input 
        boxone.value = '';
        boxtwo.value = '';
    }
}

//Delete button function

function deleteEntry(entry) {
    entry.parentElement.remove();
}
