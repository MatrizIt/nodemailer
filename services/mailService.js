module.exports = (email, name, message, phone) => {
    const { createTransport } = require('../node_modules/nodemailer');
    const smtp = createTransport({
        host: 'smtp.titan.email',
        port: 465,
        secure: true,
        auth: {
            user: "atendimento@matrizit.com.br",
            pass: 'atendimentoit11'
        }
    })

    const mail = {
        from: 'atendimento@matrizit.com.br',
        to: [email, "atendimento@matrizit.com.br"],
        subject: `Contato site MatrizIT`,
        html: `
        <table cellspacing="0" cellpadding="10" border="0" style="background-color: #000021; width: 100%; height: 100%;">
    <tr style="justify-content: center; width: 50%; align-items: center; margin: auto; text-align: center;">
        <td></td>
        <td><a href="https://matrizit.com.br" target="_blank"><img style="margin-top: 10%; margin-bottom: 10%;"
                    src="https://matrizit.com.br/assets/images/logo-horizontal.png"></a></td>
    </tr>
    <tr>
        <td></td>
        <td
            style="background-color: #FFFFFF; border-radius: 30px; justify-content: center; width: 50%; margin: auto; padding: 20px;">
            <br><br>
            <h3 style="text-align: center;">Dados fornecidos para contato !</h3>
            <br><br>
            <p style="text-align: center;"><b>Nome</b> : ${name} </p>
            <p style="text-align: center;"><b>Email</b> : ${email}</p>
            <p style="text-align: center;"><b>Telefone</b> : ${phone}</p>
            <p style="text-align: center;"><b>Mensagem</b> : ${message}</p>
            <br><br>
        </td><br>
    </tr>
    <tr>
        <td></td>
        <td style="text-align: center;color: #FFFFFF;">
            <p style="color: #FFFFFF;"><br>Entraremos em contato em breve para mais detalhes.<br>
            </p>
        </td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td style="text-align: center;">
            <a href="https://www.facebook.com/Matrizit" target="_blank">
            <img style="width: 30px;" src="https://matrizit.com.br/assets/images/face.png">
            </a>
            <a href="https://www.linkedin.com/company/matriz-it/?viewAsMember=true" target="_blank">
            <img style="width: 30px;" src="https://matrizit.com.br/assets/images/linkedin.png">
            </a>
            <a href="https://www.instagram.com/matrizit/" target="_blank">
                <img style="border-radius: 4px; width: 30px;" src="https://matrizit.com.br/assets/images/instagram.png">
            </a>
            </td>
            <td></td>

    </tr>
    <tr>
        <td></td>
        <td style="text-align: center;"><a href="https://matrizit.com.br" target="_blank"><img
            style="margin-top: 10%; margin-bottom: 10%; width: 250px;"
            src="https://matrizit.com.br/assets/images/logo-email.png"></a></td>
            <td></td>
    </tr>
</table>`,
    }

    return new Promise((resolve, reject) => {
        smtp.sendMail(mail)
        .then(response => {
            smtp.close();
            return resolve(response);
        })
        .catch(error => {
            smtp.close();
            return reject(error);
        })
    })
}