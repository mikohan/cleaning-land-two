import { NextPage } from 'next';
import { Fragment } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
// -------- custom component -------- //
import { Hero3Custom } from 'components/blocks/hero';
import { Blog1Custom } from 'components/blocks/blog';
import { Facts1 } from 'components/blocks/facts';
import { About3Custom } from 'components/blocks/about';
import { NavbarCustom } from 'components/blocks/navbar';
import { Footer5, Footer5Custom } from 'components/blocks/footer';
import { Contact1Custom } from 'components/blocks/contact';
import { Pricing3Custom } from 'components/blocks/pricing';
import { Process3Custom } from 'components/blocks/process';
import { CTA4Custom } from 'components/blocks/call-to-action';
import { Testimonial2Custom } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import { Team1Custom, Team5Custom } from 'components/blocks/team';
import Modal from 'components/reuseable/custom/Modal';

const Demo3: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-dark">
        <NavbarCustom
          search
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
        />
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
            <div className="mb-15"></div>
            <Process3Custom
              image="/img/photos/cleaning/vicky_review@2x.jpg"
              line1="One of our happy Clients - Victoria A."
            />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA4Custom />

        {/* ========== case studies section ========== */}
        <Blog1Custom />

        <div className="mb-18"></div>
        <Team1Custom />
        {/* ========== company facts section ========== */}
        <Facts1 />

        <section className="wrapper bg-light angled upper-end lower-start">
          <div className="container py-16 py-md-18 position-relative">
            {/* ========== client reviews section ========== */}
            <Testimonial2Custom />
            {/* ========== our pricing section ========== */}
            <Pricing3Custom />
            {/* ========== contact section ========== */}
            <Contact1Custom />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer5Custom />
      <Modal />
    </Fragment>
  );
};

export default Demo3;
