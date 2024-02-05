import './css/frontpage.css';
import qr1 from './images/image-qr-code.png';


function Front1() {
    return (
      <div  className='full-page'>
        <div className='hei'>
           
        
        <div className="inner-block">
            <div className="inner1">
                <img src={qr1} alt="" />
                <div className="inner2">
                    <p>Improve Your Front end skills by building projects</p>
                    <div className="inner3">
                        <p>Scan this QR code to visit Front end mentor and take your coding skills to the next level</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
      </div>
    );
  }
  
  export default Front1;