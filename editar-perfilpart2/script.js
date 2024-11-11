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


const trashButton = document.getElementById('trash-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const bioInput = document.getElementById('bio');

trashButton.onclick = () => {
    
    const confirmBox = document.createElement('div');
    confirmBox.textContent = 'Tem certeza que deseja excluir sua conta?';
    confirmBox.style.position = 'fixed';
    confirmBox.style.top = '50%';
    confirmBox.style.left = '50%';
    confirmBox.style.transform = 'translate(-50%, -50%)';
    confirmBox.style.padding = '30px';
    confirmBox.style.backgroundColor = '#474747';
    confirmBox.style.color = '#fff';
    confirmBox.style.borderRadius = '10px';
    confirmBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    confirmBox.style.fontSize = '18px';
    confirmBox.style.width = '300px';
    confirmBox.style.textAlign = 'center';
    confirmBox.style.zIndex = '1000';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'space-between';  
    buttonsContainer.style.width = '100%';  

    
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Sim';
    yesButton.style.padding = '10px 20px';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '5px';
    yesButton.style.backgroundColor = '#ff4d4d';
    yesButton.style.color = '#FFFBFB';
    yesButton.style.cursor = 'pointer';
    yesButton.style.width = '48%'; 

   
    const noButton = document.createElement('button');
    noButton.textContent = 'Não';
    noButton.style.padding = '10px 20px';
    noButton.style.border = 'none';
    noButton.style.borderRadius = '5px';
    noButton.style.backgroundColor = '#737373';
    noButton.style.color = '#FFFBFB';
    noButton.style.cursor = 'pointer';
    noButton.style.width = '48%'; 
    

    
    
    yesButton.onclick = () => {
        nameInput.value = '';
        emailInput.value = '';
        bioInput.value = '';
        document.body.removeChild(confirmBox);
    };

    
    noButton.onclick = () => {
        document.body.removeChild(confirmBox);
    };

    
    buttonsContainer.appendChild(yesButton);
    buttonsContainer.appendChild(noButton);

   
    confirmBox.appendChild(buttonsContainer);

    
    document.body.appendChild(confirmBox);
};


const sairConta = document.getElementById('sairconta');

sairConta.onclick = () => {
   
    const confirmBox = document.createElement('div');
    confirmBox.textContent = 'Tem certeza que deseja sair da sua conta?';
    confirmBox.style.position = 'fixed';
    confirmBox.style.top = '50%';
    confirmBox.style.left = '50%';
    confirmBox.style.transform = 'translate(-50%, -50%)';
    confirmBox.style.padding = '30px';
    confirmBox.style.backgroundColor = '#474747';
    confirmBox.style.color = '#fff';
    confirmBox.style.borderRadius = '10px';
    confirmBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    confirmBox.style.fontSize = '18px';
    confirmBox.style.width = '300px';
    confirmBox.style.textAlign = 'center';
    confirmBox.style.zIndex = '1000';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'space-between';  
    buttonsContainer.style.width = '100%'; 

    
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Sim';
    yesButton.style.padding = '10px 20px';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '5px';
    yesButton.style.backgroundColor = '#ff4d4d';
    yesButton.style.color = '#FFFBFB';
    yesButton.style.cursor = 'pointer';
    yesButton.style.width = '48%'; 

   
    const noButton = document.createElement('button');
    noButton.textContent = 'Não';
    noButton.style.padding = '10px 20px';
    noButton.style.border = 'none';
    noButton.style.borderRadius = '5px';
    noButton.style.backgroundColor = '#737373';
    noButton.style.color = '#FFFBFB';
    noButton.style.cursor = 'pointer';
    noButton.style.width = '48%'; 

    
    noButton.onclick = () => {
        document.body.removeChild(confirmBox);
    };
   
     yesButton.onclick = () => {
        document.body.removeChild(confirmBox);
    };


    
    buttonsContainer.appendChild(yesButton);
    buttonsContainer.appendChild(noButton);

    
    confirmBox.appendChild(buttonsContainer);

   
    document.body.appendChild(confirmBox);
};

