
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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const contButton = document.getElementById('cont-button');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    contButton.addEventListener('click', (event) => {
        // Impede o envio do formulário se a validação falhar
        event.preventDefault();

        // Variáveis para armazenar as mensagens de erro
        let isValid = true;
        let errorMessage = '';

        // Validação do nome
        if (!nameField.value.trim()) {
            isValid = false;
            errorMessage += 'O nome é obrigatório.\n';
        }

        // Validação do email (verifica se está vazio e se o formato está correto)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailField.value.trim()) {
            isValid = false;
            errorMessage += 'O email é obrigatório.\n';
        } else if (!emailRegex.test(emailField.value.trim())) {
            isValid = false;
            errorMessage += 'O email não tem um formato válido.\n';
        }

        // Se a validação falhar, mostrar mensagem de erro
        if (!isValid) {
            alert(errorMessage);
        } else {
            // Caso a validação seja bem-sucedida, envie o formulário ou execute outra ação
            form.submit();
        }
    });
});