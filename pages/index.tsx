import { NextPage } from 'next';
import { Fragment } from 'react';
import Script from 'next/script';
// -------- custom component -------- //
import { Hero3, Hero3Custom } from 'components/blocks/hero';
import { Blog1, Blog1Custom } from 'components/blocks/blog';
import { Facts1 } from 'components/blocks/facts';
import { About3Custom } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer5 } from 'components/blocks/footer';
import { Contact1, Contact1Custom } from 'components/blocks/contact';
import { Pricing3, Pricing3Custom } from 'components/blocks/pricing';
import { Process3Custom } from 'components/blocks/process';
import { Services4 } from 'components/blocks/services';
import { CTA4, CTA4Custom } from 'components/blocks/call-to-action';
import { Testimonial2 } from 'components/blocks/testimonial';
import NextLink from 'components/reuseable/links/NextLink';
import PageProgress from 'components/common/PageProgress';

const Demo3: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-dark">
        {/* <Navbar
          search
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
        /> */}
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero3Custom />

        <section className="wrapper bg-light">
          <div className="container pt-19 pt-md-21 pb-16 pb-md-18">
            {/* ========== what we do section ========== */}
            {/* <Services4 /> */}
            {/* ========== how it works section ========== */}
            <Process3Custom image="/img/photos/cleaning/003.jpg" line1="We'll take care of the bathrooms." />
            {/* ========== why choose us section ========== */}
            <About3Custom image="/img/photos/cleaning/002.jpg" line1="We can move things to clean under!" />
            <div className="mb-15"></div>
            {/* ========== how it works section ========== */}
            <Process3Custom image="/img/photos/cleaning/ceiling.jpg" line1="Your walls and ceilings will be clean" />
            {/* ========== why choose us section ========== */}
            <About3Custom image="/img/photos/cleaning/004.jpg" line1="You'll breath with a clean air!" />
            <div className="mb-15"></div>
            <Process3Custom image="/img/photos/cleaning/005.jpg" line1="We can take care of your kitchen!" />
            {/* ========== why choose us section ========== */}
            <About3Custom
              image="/img/photos/cleaning/006.jpg"
              line1="Every corner in your house will be dust free and clean!"
            />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA4Custom />

        {/* ========== case studies section ========== */}
        <Blog1Custom />

        {/* ========== company facts section ========== */}
        <Facts1 />

        <section className="wrapper bg-light angled upper-end lower-start">
          <div className="container py-16 py-md-18 position-relative">
            {/* ========== client reviews section ========== */}
            <Testimonial2 />
            {/* ========== our pricing section ========== */}
            <Pricing3Custom />
            {/* ========== contact section ========== */}
            <Contact1Custom />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer5 />
    </Fragment>
  );
};

export default Demo3;
