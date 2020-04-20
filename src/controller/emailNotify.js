import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import chalk from 'chalk';
import jsonFormatter from '../helpers/jsonFormat';
dotenv.config();

const log = console.log;
const error = chalk.bold.red.inverse.bgWhite;
const errorMessage = chalk.white.bgGrey;
const success = chalk.bold.black.bgGreen;
const successMessage = chalk.green;

class Controller{
  static async sendEmail(req, res){
        const sender = req.body.sender;
        const taskTitle = req.body.taskTitle;
        const taskDetails = req.body.taskDetails;
        const senderlocation = req.body.senderlocation;
        const location = req.body.location;
        const dateTime = req.body.dateTime;
        const priceValue = req.body.priceValue;
        
        if(!taskTitle || !taskDetails || !sender || !location || !dateTime || !priceValue || !senderlocation) return jsonFormatter.error(res, 'all fields are required', 400);
        
   try{
         SendNotificationEmail(res, sender, 'A new message', `
         Dear Team bridge, A new user sent a response from ${senderlocation}, <br>
        <b> Q. what do you want to do ?</b> A: ${taskTitle} <br>
        <b> Q. what are the details ?</b> A: ${taskDetails} <br>
        <b> Q. where do you need it done ?</b> A: ${location} <br>
        <b> Q. Email address ?</b> A: ${sender} <br>
        <b> Q. when do you need it done ? A: ${dateTime}</b> <br>
        <b> Q. Your budget </b> A: ${priceValue}`)
            return jsonFormatter.success(res, 'email sent');
          }catch(err){
            log(error('Error from : src/contollers/emailNotify.js - sendEmail'), errorMessage(err));
          }
        }
}


function SendNotificationEmail(res, sender, subject, html){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
      from: sender,
      to:`${process.env.EMAIL_ADDRESS}`,
      subject: subject,
      html : html
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        return console.error(error);
      } else {
        return console.log(res, `Email sent: ${info.response}` );
      }
    });
  }
  export default Controller;
    // const locationOnline = document.getElementById('online').checked;
    // const locationOffline = document.getElementById('radioMe').checked;
    // const SenderEmailAddress = document.getElementById('address').value;
    // const dateTime = document.getElementById('dateTime').value;
    // const priceValue = document.getElementById('price__value').value;
    
    // document.getElementById('next-one').addEventListener('click', ()=>{
    //     const taskTitle = document.getElementById('task__title').value;
    //     const details = document.getElementById('details').value;
    //     if(!taskTitle || details) {
    //       console.log('error dont allow the user to go')
    //     }
    // })
