// const sgMail=require('@sendgrid/mail')
//
//
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//
// const sendWelcomeEmail=(email,name)=>{
//   sgMail.send({
//     to: email,
//     from: 'spalriwalau@gmail.com',
//     subject: 'Thanks for joining in',
//     text: 'Welcome to the app, ${name}, Hope you enjoy your experience'
//   })
// }
//
// const sendCancellationEmail=(email,name)=>{
//   sgMail.send({
//     to: email,
//     from: 'spalriwalau@gmail.com',
//     subject: 'Sad to see you go',
//     text: 'We are dejected to see you go, ${name}. Please take a moment and let me know why you cancelled your account'
//   })
// }
//
//
// module.exports={
//   sendWelcomeEmail,
//   sendCancellationEmail
// }
