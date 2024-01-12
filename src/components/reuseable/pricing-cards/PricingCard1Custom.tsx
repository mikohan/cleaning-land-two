import { FC } from 'react';
import Price from './Price';
import NextLink from '../links/NextLink';

// ================================================================
type PricingCard1Props = {
  planName: string;
  features: string[];
  bulletBg?: boolean;
  yearlyPrice: number;
  monthlyPrice: number;
  activeYearly: boolean;
  roundedButton?: boolean;
};
// ================================================================

const PricingCard1: FC<PricingCard1Props> = (props) => {
  const { planName, features, yearlyPrice, monthlyPrice, activeYearly, roundedButton, bulletBg } = props;

  const yearClasses = activeYearly ? 'price-show' : 'price-hide price-hidden';
  const monthClasses = !activeYearly ? 'price-show' : 'price-hide price-hidden';

  return (
    <div className="pricing card shadow-lg">
      <div className="card-body pb-12">
        <div className="prices text-dark justify-content-center pb-16">
          <div className="price-custom mb-6">$70/hr</div>
          <div className="price-custom-green">$40/hr</div>
        </div>
        <ul className={`icon-list ${bulletBg ? 'bullet-bg' : ''} bullet-soft-primary mt-7 mb-8`}>
          {features.map((item, i) => (
            <li key={i}>
              <i className="uil uil-check fs-21" />
              <span>
                <strong>{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard1;
