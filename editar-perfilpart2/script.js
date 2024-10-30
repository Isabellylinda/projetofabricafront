
const saveButton = document.getElementById('cont-button'); 
saveButton.onclick = () => {
   
    const alertBox = document.createElement('div');
    alertBox.textContent = 'Suas mudanças foram salvas com sucesso!';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.padding = '30px';
    alertBox.style.backgroundColor = '#474747';
    alertBox.style.color = '#fff';
    alertBox.style.borderRadius = '10px';
    alertBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    alertBox.style.fontSize = '18px';
    alertBox.style.width = '300px';
    alertBox.style.textAlign = 'center';
    alertBox.style.zIndex = '1000';

   
    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.marginTop = '20px';
    okButton.style.padding = '10px 20px';
    okButton.style.border = 'none';
    okButton.style.borderRadius = '5px';
    okButton.style.backgroundColor = '#737373';
    okButton.style.color = '#FFFBFB';
    okButton.style.cursor = 'pointer';

    
    okButton.onclick = () => {
        document.body.removeChild(alertBox);
    };

    
    alertBox.appendChild(okButton);

    
    document.body.appendChild(alertBox);
};
