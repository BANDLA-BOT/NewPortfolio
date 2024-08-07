import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.PASS_USER
    }
})

export const sendEmail = (to, subject, text) =>{
    const mailOptions ={
        from:process.env.EMAIL_USER,
        to,
        subject,
        text,
    }
    return transporter.sendMail(mailOptions)
}
export const sendConfirmationEmail = (to, name) => {
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to,                         
      subject: 'Subscription Confirmation',
      text: `Hello ${name},\n\nThank you for subscribing to our newsletter! We appreciate your interest and will keep you updated with the latest news.\n\nBest regards,\nGuru prasad`
    }
    return transporter.sendMail(mailOptions)
}
