import { FC } from 'react';
import { ProcessList2 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList4 } from 'data/process';

type IProps = {
  image: string;
};
const Process3: FC<IProps> = ({ image }) => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.9rem' }} />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src={image} width={1150} height={1100} alt="process" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">How It Works?</h2>
        <h3 className="display-4 mb-7">Here are the 3 working steps on success.</h3>

        {/* {processList4.map((item) => (
          <ProcessList2 {...item} key={item.no} className="icon btn btn-block btn-soft-primary pe-none me-5" />
        ))} */}
      </div>
    </div>
  );
};

export default Process3;
