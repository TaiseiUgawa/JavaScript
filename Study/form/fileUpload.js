'use strict'

const preview = document.forms.form_test1.preview;

document.forms.form_test1.image_file.addEventListener('change', e => {
    // console.log(e.target.files[0]);
    // 取得
    const uploadFile = e.target.files[0];
    // 表示
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result; //Base64
    });
    reader.readAsDataURL(uploadFile);
});