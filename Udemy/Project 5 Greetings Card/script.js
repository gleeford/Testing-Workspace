function opencard(){
    let cover = document.getElementById('cover');
    cover.className = 'open-card';
    console.log('open');
}

function closecard(){
    let cover = document.getElementById('cover');
    cover.className = '';
    console.log('close');
}