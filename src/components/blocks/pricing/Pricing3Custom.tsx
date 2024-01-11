import { FC, useState } from 'react';
import Switch from 'components/reuseable/Switch';
import NextLink from 'components/reuseable/links/NextLink';
import { PricingCard1, PricingCard1Custom } from 'components/reuseable/pricing-cards';
// -------- data -------- //

const item = {
  monthlyPrice: 40,
  yearlyPrice: 199,
  planName: 'Premium',
  features: [
    'Cleaning under big Things',
    'Windows Cleaning',
    'Fridge Cleaning',
    'Oven Cleaning',
    'Walls and ceilings dusting'
  ]
};

const Pricing3: FC = () => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 mb-16 mb-md-18">
      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-center justify-content-lg-end">
          <h2 className="mb-0 pe-3 text-center">Deep Cleaning Pricing</h2>
        </div>
        <div className="row gy-6 position-relative mt-5">
          <div
            className="shape rounded-circle bg-soft-primary rellax w-18 h-18"
            style={{ top: '-1rem', left: '-2rem' }}
          />
          <div className="shape bg-dot red rellax w-16 h-18" style={{ right: '-1.6rem', bottom: '-0.5rem' }} />

          <div className={`col-md-6 'popular'}`}>
            <PricingCard1Custom {...item} roundedButton bulletBg activeYearly={activeYearly} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing3;
