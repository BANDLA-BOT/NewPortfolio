import contactModel from "../models/contactUsForm.js"
import{ sendEmail, sendConfirmationEmail } from '../utils/mailer.js'
export const contact = async(req,res) =>{
    const { fname, email, message } = req.body
    try {
        const newContact = new  contactModel({
            fname,
            email,
            message
        })
        await newContact.save()
        await sendEmail(process.env.EMAIL_USER, 'New Newsletter Subscription', `A new user has subscribed to the newsletter with email: ${email}`)
        await sendConfirmationEmail(email, fname)
        res.json({Message:"Thank you for contacting us", formData:newContact})
    } catch (error) {
        res.status(500).json({message:'Internal server error', Error:error.message})
    }
}

