document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const outputBox = document.getElementById('outputBox');
    const encryptButton = document.getElementById('botao1');
    const decryptButton = document.getElementById('botao2');
    const copyButton = document.getElementById('botao3');

    const encrypt = (text) => {
        let encryptedText = text;
        encryptedText = encryptedText.replace(/e/g, 'enter');
        encryptedText = encryptedText.replace(/i/g, 'imes');
        encryptedText = encryptedText.replace(/a/g, 'ai');
        encryptedText = encryptedText.replace(/o/g, 'ober');
        encryptedText = encryptedText.replace(/u/g, 'ufat');
        return encryptedText;
    };

    const decrypt = (text) => {
        let decryptedText = text;
        decryptedText = decryptedText.replace(/enter/g, 'e');
        decryptedText = decryptedText.replace(/imes/g, 'i');
        decryptedText = decryptedText.replace(/ai/g, 'a');
        decryptedText = decryptedText.replace(/ober/g, 'o');
        decryptedText = decryptedText.replace(/ufat/g, 'u');
        return decryptedText;
    };

    encryptButton.addEventListener('click', function() {
        const encrypted = encrypt(inputBox.value.toLowerCase());
        outputBox.value = encrypted;
    });

    decryptButton.addEventListener('click', function() {
        const decrypted = decrypt(inputBox.value.toLowerCase());
        outputBox.value = decrypted;
    });

    copyButton.addEventListener('click', function() {
        outputBox.select();
        document.execCommand('copy');
    });
});
