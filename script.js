const toggleCheckbox = document.querySelector('.theme-toggle');

let theme = localStorage.getItem('theme');
if(theme === null || theme === null) {
    localStorage.setItem('theme', 'light-theme');
    theme = localStorage.getItem('theme');
}

document.body.className = `${theme}`;

if(theme === 'light-theme') {
    toggleCheckbox.checked = false;
}
else {
    toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener('click', (e) => {
    if(e.target.checked) {
        console.log('checked');
        localStorage.setItem('theme', 'dark-theme');
        
    }
    else {
        console.log('unchecked');
        localStorage.setItem('theme', 'light-theme')
    }

    theme = localStorage.getItem('theme');
    document.body.className = `${theme}`;
});
