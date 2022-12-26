import React from 'react';
import './footer.css';

import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn} from 'mdb-react-ui-kit';
import {FaFacebookF,FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
      
<br/>

        <section className=''>
          {/* שליחת מייל הוא חלק מהנראות ולא באמת ניתן לשלוח ולהצטרף לניוזלטור ה FOOTER */}
          
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

         

        <section className='mb-4'>
          <br/>
          <p>
          You are invited to enter one of our community websites and browse and share and expand the circle of movie viewers.          </p>
          <p>
          Enter now and subscribe to our newsletter.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Checking/cancelling an order
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  About MovieTime
                   </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  General Information
                  </a>
                </li>
              </ul>
            </MDBCol>



            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Terms of Use</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Terms
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  rights
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  accessibility
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Accessibility statement
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol/>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Network</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <div className='icons'>
                  <FaFacebookF/>                                       
                     <FaInstagram/>  
                     <FiTwitter/>   
                     <MdEmail/>
                  </div>
                   
                </li>
              </ul>
            </MDBCol>

          </MDBRow>
        </section>

        <section className=''>
          <MDBRow>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      ©️ EladRobinov 2022
              <a className='text-white' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
  );
}

/*שימוש בבוטסטארפ עם שינוים משלי  */


