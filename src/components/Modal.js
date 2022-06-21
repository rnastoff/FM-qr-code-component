import Card from './Card';
import classes from './Modal.module.css';

import qrCode from "../images/image-qr-code.png";


const Modal = () => {
  return (
    <Card>
      <div className={classes.modal__qrCode}>
        <img src={qrCode} alt="qr code" />
      </div>
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </Card>
  )
}

export default Modal;