import express from 'express';
import cors from 'cors';
import nodeMailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

 

const app=express();
app.use(cors());
app.use(express.json());




app.get('/contact',(req,res)=>{

  res.send (`<h3>${process.env.EMAIL_USER}</h3>`);
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // instead of writing email here
        pass: process.env.EMAIL_PASS   // instead of writing password here
      }
    });

    await transporter.sendMail({
      from: email,
  to: process.env.EMAIL_USER,    // your Gmail
  replyTo: email,         
  subject: subject,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    });

    res.json({ success: true, message: "Message Sent!" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error sending email" });
  }
});



app.listen(5000, () => {
  console.log('🚀 Server is running on port 5000');
});
