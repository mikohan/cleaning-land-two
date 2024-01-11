import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import { BlogCard1, BlogCard1Custom } from 'components/reuseable/blog-cards';
// -------- carousel breakpoint obj -------- //
import carouselBreakpoints from 'utils/carouselBreakpoints';
// -------- data -------- //

export const blogList1 = [
  {
    id: 1,
    category: 'Deep Cleaning',
    date: '2023',
    image: '/img/photos/cleaning/b2.jpg',
    title: 'One of the our project in Los Angeles'
  },
  {
    id: 2,
    category: 'Deep Cleaning',
    date: '2023',
    image: '/img/photos/cleaning/b1.jpg',
    title: 'Deep Cleaning of 2 bd Apartment'
  },
  {
    id: 3,
    category: 'Meeting',
    date: '26 Feb 2022',
    image: '/img/photos/cleaning/b3.jpg',
    title: 'Deep Cleaning at Playa Vista'
  },
  {
    id: 4,
    category: 'Deep Cleaning',
    date: '2024',
    image: '/img/photos/cleaning/b4.jpg',
    title: 'Deep Cleaning at Santa Monica'
  }
];

const Blog1: FC = () => {
  return (
    <section className="wrapper bg-light angled upper-end">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7">
            <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Case Studies</h2>
            <h3 className="display-4 mb-9">Check out some of our Deep Cleaning projects.</h3>
          </div>
        </div>

        <div className="swiper-container blog grid-view mb-10">
          <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
            {blogList1.map((item) => (
              <BlogCard1Custom key={item.id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blog1;
