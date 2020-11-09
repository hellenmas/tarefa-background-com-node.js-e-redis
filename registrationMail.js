import mail from "../lib/mail";

export default {
    //Chave da fila de background
    key: "RegistrationMail",

    //Opções da fila de background
    options:{
        delay: 5000,
        priority: 3,
        lifo: true
    },

    //Função para registra da fila de backuground
    async handle({ data }){
        //Desestrutura os dados do usuário
        const { user } = data;

        //Envia o -email para o usuário
        await mail.sendMail({
            from: "HW <cadastro@hw.com.br>",
            to: `${user.name} <${user.email}>`,
            subject: "Cadastro de acesso ao HW",
            html: `Olá ${user.name} bem vindo ao HW!!!<br><br>Sua senha temporária para acessar o HW foi definida como: ${user.password}<br>Por favor alterar a senha quando fizer o primeiro acesso.<br><br>Obrigado!!!`
        });
    }
}