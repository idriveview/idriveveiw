
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        M.toast({html: 'Адрес скопирован!', classes: 'teal'});
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
}
