import nodemailer from "nodemailer";
import { Subscribe } from "../Model/Subscribe.js";
import { News } from "../Model/News.js";

export const MailToDatebase = async () => {
  // create reusable transporter object using the default SMTP transport

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL_APP, // your email
      pass: process.env.GOOGLE_GMAIL_APP_PASSWORD, // your email password
    },
  });
  const results = [];
  const allSubScriber = await Subscribe.find().maxTimeMS(30000);
  allSubScriber.forEach((i) => results.push(i.email));
  await News
    .find()
    .sort({ createdAt: -1 }) // ترتيب البيانات بحسب تاريخ الإنشاء بترتيب تنازلي
    .limit(13) // الحصول على الـ 13 بيانًا الأخيرة فقط
    .then((i) => {
      const randomIndex = Math.floor(Math.random() * i.length);
      const News = i[randomIndex];
      let mailOptions = {
        from: '"عصفوره - الأخباري" <' + process.env.MY_EMAIL_APP + ">", // اسم شركتك كمرسل
        to: results, // list of receivers
        subject: "نشرتك الاخباريه اليوم", // Subject line
        text: `مرحبا ${i.email}`, // plain text body
        html: `<!DOCTYPE html>
      <html>
          <head>
    <meta charset="UTF-8" />
    <title>مرحبا بك في عصفوره - الأخباري</title>
   <style type="text/css">
    /* inline styles */
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      width: 100%;
      max-width: 600px;
      padding: 50px;
      margin: 0 auto;
      background-color: #f0f7ff;
      box-sizing: border-box;
    }

    h1,
    p {
      color: #333;
      margin: 0;
      width: 90%;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .button {
      display: inline-block;
      background-color: #195091;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
    }

    @media only screen and (max-width: 768px) {
      .container {
        padding: 30px;
      }

      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    @media only screen and (max-width: 480px) {
      .container {
        padding: 20px;
      }

      h1 {
        font-size: 18px;
      }

      p {
        font-size: 12px;
      }

      .button {
        font-size: 14px;
        padding: 8px 16px;
      }
    }
  </style>
  </head>
        <body>
          <div class="container">
          <h1>${News.title}</h1>
          <p>${News.desc[0]}</p>
            <a href="https://asfourah.online/News/${News._id}" class="button">قراءه الخبر كامل</a>
          </div>
        </body>
      </html>
      `, // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    })
    .catch((i) => console.error(i));
};