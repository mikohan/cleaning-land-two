import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
import Image from 'next/image';
import { slideInDownAnimate } from 'utils/animation';

const Contact1: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.9rem' }} />
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <Image src="/img/photos/cleaning/contact.jpg" width={575} height={550} alt="Contact us" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Get In Touch</h2>
        <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-location-pin-alt" />
            </div>
          </div>

          <div>
            <h5 className="mb-1">Address</h5>
            <address>
              13163 Fountain Park Dr, <br className="d-none d-md-block" />
              Playa Vista, CA 90094
            </address>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-phone-volume" />
            </div>
          </div>
          <div>
            <h5 className="mb-1">Phone</h5>
            <p>+1 (213) 598-7763</p>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-envelope" />
            </div>
          </div>
          <div>
            <h5 className="mb-1">E-mail</h5>
            <p className="mb-0">
              <a href="mailto:sandbox@email.com" className="link-body">
                angaralabllc@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div style={slideInDownAnimate('1200ms')} className="pt-10">
          <button style={{ fontSize: '120%' }} className="btn btn-lg rounded gradient-6 full-width button-text">
            Contact Us!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
