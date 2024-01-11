import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const CTA4: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{ backgroundImage: 'url(/img/photos/cleaning/bg1.jpg)' }}
    >
      <div className="container py-18">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="fs-16 text-uppercase text-white mb-3 text-line">Join Our Community</h2>
            <h3 className="display-4 mb-5 mb-6 text-white pe-xxl-18">
              We are trusted by over 100+ clients. Join them by using our services and make your home better.
            </h3>

            <button
              style={{ color: 'white', fontSize: '120%', fontWeight: 600 }}
              className="btn full-width gradient-6 rounded mb-0 text-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA4;
