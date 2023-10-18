const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('lock-button');
const codeEditor = document.getElementById('code-editor');

copyButton.addEventListener('click', () => {
    const code = codeEditor.textContent;
    navigator.clipboard.writeText(code)
        .then(() => alert('Code copied to clipboard!'))
        .catch(error => console.error('Copy failed: ', error));
});

lockButton.addEventListener('click', () => {
    codeEditor.contentEditable = !codeEditor.isContentEditable;
    lockButton.textContent = codeEditor.isContentEditable ? 'Lock' : 'Unlock';
});


// Example save function using local storage:
saveButton.addEventListener('click', () => {
    const code = codeEditor.textContent;
    localStorage.setItem('savedCode', code);
    alert('Code saved successfully!');
});

// Load saved code (if any) on page load:
const savedCode = localStorage.getItem('savedCode');
if (savedCode) {
    codeEditor.textContent = savedCode;
}
