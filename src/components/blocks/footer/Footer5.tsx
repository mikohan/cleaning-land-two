import { FC } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import footerNav from 'data/footer';

const Footer5: FC = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <Image
                className="mb-4"
                src="/img/photos/cleaning/logo@2x.png"
                width={268}
                height={52}
                alt="Logo in footer"
              />
              <p className="mb-4">
                © 2024 Playa Cleaning. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>
              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">13163 Fountain Park Dr, Los Angeles CA, 90094</address>
              <NextLink title="angaralabllc@gmail.com" href="mailto:angaralabllc@gmail.com" />
              <br /> +1(213) 598-7763
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
