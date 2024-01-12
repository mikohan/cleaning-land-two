import { phone } from 'confing';
import { FC, Fragment, useState, ChangeEvent, FormEvent } from 'react';

const Modal: FC = () => {
  const [phone, setPhone] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.getElementById('closeModal')?.click();
    console.log(phone);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  return (
    <Fragment>
      <button
        data-bs-toggle="modal"
        data-bs-target="#modal-02"
        className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0"
      >
        Subscription
      </button>

      <div className="modal fade" id="modal-02" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content text-center">
            <div className="modal-body">
              <button id="closeModal" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <figure className="mb-6">
                    <img src="/img/illustrations/i7.png" srcSet="/img/illustrations/i7@2x.png 2x" alt="Modal image" />
                  </figure>
                </div>
              </div>
              <h3>Join the mailing list and get %10 off</h3>
              <div className="mb-6">
                <p>Our phone number is</p>
                <p>{phone}.</p>
                <p>
                  Text us please to get an estimation. Or just send us your phone number and we'll text you back ASAP.
                </p>
              </div>

              <div className="newsletter-wrapper">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div id="mc_embed_signup">
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        method="post"
                      >
                        <div id="mc_embed_signup_scroll">
                          <div className="mc-field-group input-group form-floating">
                            <input
                              value={phone}
                              onChange={handleChange}
                              type="number"
                              name="PHONE"
                              className="required email form-control"
                              placeholder="Phone Number"
                              id="mce-phone"
                            />
                            <label htmlFor="mce-EMAIL" className="text-start">
                              Phone Number
                            </label>
                            <input
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="btn btn-primary"
                            />
                          </div>
                          <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                          </div>

                          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                            <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex={-1} />
                          </div>

                          <div className="clear" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Modal;
