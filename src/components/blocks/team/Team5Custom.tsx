import { FC } from 'react';
import { TeamCard3, TeamCard3Custom } from 'components/reuseable/team-cards';
// -------- data -------- //

const teams = [
  {
    id: 1,
    name: 'Alice',
    designation: 'Business Owner',
    image: { '1x': '/img/photos/cleaning/avatars/t1.jpg', '2x': '/img/photos/cleaning/avatars/t1@2x.jpg 2x' }
  },
  {
    id: 2,
    name: 'Vlad V',
    designation: 'Marketing Specialist',
    image: { '1x': '/img/photos/cleaning/avatars/t2.jpg', '2x': '/img/photos/cleaning/avatars/t2@2x.jpg 2x' }
  },
  {
    id: 3,
    name: 'Vladimir V',
    designation: 'Technician',
    image: { '1x': '/img/photos/cleaning/avatars/t3.jpg', '2x': '/img/photos/cleaning/avatars/t3@2x.jpg 2x' }
  },
  {
    id: 4,
    name: 'Basil V',
    designation: 'Technician',
    image: { '1x': '/img/photos/cleaning/avatars/t4.jpg', '2x': '/img/photos/cleaning/avatars/t4@2x.jpg 2x' }
  }
];

const Team5: FC = () => {
  return (
    <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-16 mb-md-19">
      {teams.map((item) => (
        <div className="col-md-6 col-lg-3" key={item.id}>
          <TeamCard3Custom {...item} />
        </div>
      ))}
    </div>
  );
};

export default Team5;
