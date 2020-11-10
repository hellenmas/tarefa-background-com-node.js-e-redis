import mail from "../lib/mail";

export default {
   
    key: "RegistrationMail",
    options:{
        delay: 5000,
        priority: 3,
        lifo: true
    },
    async handle({ data }){
      
        const { user } = data;

        await mail.sendMail({
            from: "HW <cadastro@hw.com.br>",
            to: `${user.name} <${user.email}>`,
            subject: "Cadastro de acesso ao HW",
            html: `Olá ${user.name} bem vindo ao HW!!!<br><br>Sua senha temporária para acessar o HW foi definida como: ${user.password}<br>Por favor alterar a senha quando fizer o primeiro acesso.<br><br>Obrigado!!!`
        });
    }
}
