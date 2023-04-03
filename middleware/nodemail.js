import nodemailer from"nodemailer";



const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "baccoucheyessin@gmail.com", // generated ethereal user
        pass: "brybgogtajtytaye", // generated ethereal password
      },
    });

    await transporter.sendMail({
      from:  '"aziz kefi",<baccoucheyessin@gmail.com>',
      to: email,
      subject: subject,
      html: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};
export default sendEmail;