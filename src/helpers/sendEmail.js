import emailjs from '@emailjs/browser';
import { getENV } from "../helpers/getENV";

const { VITE_SERVICE_ID } = getENV();

const sendEmail = (form) => {

    emailjs.sendForm(`${VITE_SERVICE_ID}`, 'template_mpqweh8', form, 'Zznx2WeZe5GScpzUi')
      .then((result) => {
          console.log(result.text);
        //   console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });


  return emailjs;
}

export default sendEmail;