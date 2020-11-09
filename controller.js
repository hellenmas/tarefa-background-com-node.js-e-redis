import passwordGenerator from "password-generator";
import queue from "../lib/queue";

export default{
    
    async store(req, res){
       
        const {name, email} = req.body;

       
        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

       
        await queue.add("RegistrationMail", { user });

    
        return res.json(user);
    }
}