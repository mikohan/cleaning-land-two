import { phone as phone_number } from 'confing';
import { FC, Fragment, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Modal: FC = () => {
  const [phone, setPhone] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = {
      service_id: 'service_kx7h89m',
      template_id: 'template_c7pkimk',
      user_id: 'yVAKDAno88CXUFJBv',
      template_params: {
        phone: phone,
        to_name: 'Cleaners Manager'
      }
    };

    const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
    const res = await axios.post(apiUrl, credentials);
    if (res.status == 200) {
      document.getElementById('closeModal')?.click();
      setPhone('');
    } else {
      console.error('NOT SEND!');
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <Fragment>
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
              <h3>Send you phone number and get your quote ASAP.</h3>
              <div className="mb-6">
                <p>Or just call us:</p>
                <p className="h3 fw-bold">{phone_number}.</p>
                <p className="h3 fw-bolder">Or Send Your Phone</p>
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
                              className="required email form-control border border-primary"
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

                        <div className="mt-8">
                          <Link
                            href="/media/playa_vcard.vcf"
                            style={{ fontSize: '120%', textDecoration: 'underline' }}
                            // className="btn btn-lg rounded gradient-6 full-width button-text"
                          >
                            Save Our Contact for Later!
                          </Link>
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
