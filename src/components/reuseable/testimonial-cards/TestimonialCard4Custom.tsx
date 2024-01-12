import { FC } from 'react';
import Carousel from '../Carousel';
import TestimonialCard2 from './TestimonialCard2';

const testimonialList2 = [
  {
    name: 'Martin T',
    image: '/img/avatars/te7.jpg',
    designation: 'Culver City, CA',
    review: `The team at Playa Cleaning Services arrived right on time and immediately
     got to work. Their attention to detail was remarkable as they meticulously cleaned
      every corner of my home and office space. I was amazed at how thorough they were, leaving no stone unturned.`
  },
  {
    name: 'Cory Zamora',
    image: '/img/avatars/te8.jpg',
    designation: 'Santa Monica, CA',
    review: `There are many, many cleaning companies in our area, and as I mentioned,
     Playa Cleaning Services is the only one we have actually used. This company provides
      some of the best cleaning services in the industry.
       If any need arises, they are ready to fix the problem promptly.
        They are friendly and focused on providing professional cleaning services with meticulous attention to detail.`
  },
  {
    name: 'Barclay Widerski',
    image: '/img/avatars/te9.jpg',
    designation: 'Los Angeles, CA',
    review: `Playa Cleaning Services has been a lifesaver amidst my demanding work schedule. Their Maid Services provide
     impeccable cleanliness, creating an organized living space. The efficiency of their team is commendable, ensuring thorough
      cleaning. With fair pricing, it's an ideal choice for those with tight schedules.`
  },
  {
    name: 'Leonardo C',
    image: '/img/avatars/te10.jpg',
    designation: 'Los Angeles, CA',
    review: `They did an amazing job! I contacted them for a regular
     cleaning and everything was great! They also organized my clothes and items. Definitely 5 stars!!`
  }
];

// ============================================================
type TestimonialCard4Props = {
  className?: string;
  sliderWrapperClassname?: string;
};
// ============================================================

const TestimonialCard4: FC<TestimonialCard4Props> = ({
  className = '',
  sliderWrapperClassname = 'p-10 p-md-11 p-lg-13'
}) => {
  return (
    <div className={`card shadow-lg ${className}`}>
      <div className="row gx-0">
        <div
          style={{ backgroundImage: 'url(/img/photos/cleaning/tm1.jpg)' }}
          className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
        />

        <div className="col-lg-6">
          <div className={sliderWrapperClassname}>
            <div className="swiper-container dots-closer mb-4">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
                {testimonialList2.map((item, i) => (
                  <TestimonialCard2 key={i} {...item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard4;
