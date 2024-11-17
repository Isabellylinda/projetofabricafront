
const addAmigo = document.getElementById('addamigo');


addAmigo.onclick = () => {
    
    const confirmBox = document.createElement('div');
    confirmBox.textContent = 'Deseja adicionar essa pessoa a sua lista de amigos?';
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

    
    buttonsContainer.appendChild(yesButton);
    buttonsContainer.appendChild(noButton);

    
    confirmBox.appendChild(buttonsContainer);

    
    document.body.appendChild(confirmBox);

    
    yesButton.onclick = () => {
        document.body.removeChild(confirmBox);

        const successMessage = document.createElement('div');
        successMessage.textContent = 'Pessoa adicionada à sua lista de amigos!';
        successMessage.style.position = 'fixed';
        successMessage.style.top = '50%';
        successMessage.style.left = '50%';
        successMessage.style.transform = 'translate(-50%, -50%)';
        successMessage.style.padding = '20px';
        successMessage.style.backgroundColor = '#28a745';
        successMessage.style.color = '#fff';
        successMessage.style.borderRadius = '10px';
        successMessage.style.fontSize = '18px';
        successMessage.style.textAlign = 'center';
        successMessage.style.zIndex = '1000';
        successMessage.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';

       
        document.body.appendChild(successMessage);

       
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 2000);
    };
};
