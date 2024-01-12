import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';

const Hero3: FC = () => {
  // used for lightbox
  useLightBox();

  return (
    <section className="wrapper bg-dark angled lower-start">
      <div className="container pt-7 pt-md-11 pb-8">
        <div className="row gx-0 gy-10 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-1 text-white mb-4" style={slideInDownAnimate('600ms')}>
              Playa Cleaning Los Angeles:
              <br />
              <span className="text-primary text-nowrap">
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: ['attention to details', 'fast cleaners', 'client satisfaction']
                  }}
                />
              </span>
            </h1>

            <p
              className="lead fs-24 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15"
              style={slideInDownAnimate('900ms')}
            >
              Let's make your home squeaky clean!
            </p>

            <div style={slideInDownAnimate('1200ms')}>
              <button
                style={{ fontSize: '120%' }}
                className="btn btn-lg rounded gradient-6 full-width button-text"
                data-bs-toggle="modal"
                data-bs-target="#modal-02"
              >
                Contact Us!
              </button>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 mb-n18" data-cues="slideInDown">
            <div className="position-relative" style={slideInDownAnimate('0ms')}>
              <a
                data-glightbox
                href="/media/cleaning_process.mp4"
                className="btn btn-circle btn-primary btn-play ripple mx-auto mb-6 position-absolute"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 3 }}
              >
                <i className="icn-caret-right" />
              </a>

              <figure className="rounded shadow-lg">
                <Image src="/img/photos/cleaning/hero.jpg" width={1150} height={1100} alt="hero" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
