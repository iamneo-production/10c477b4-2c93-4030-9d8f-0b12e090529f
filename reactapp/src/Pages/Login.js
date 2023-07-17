import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
  
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
  
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }
  
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      navigate('/Home');
    }
  };
  

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src="https://img.freepik.com/free-vector/girl-graduation-concept-illustration_114360-12060.jpg?w=740&t=st=1688713860~exp=1688714460~hmac=91b00c31aeb8c8a67f0057e54fe5c2de5b1d684863ef7431e3df91122df6a2a0" alt="login form" className='rounded-start w-100'/>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">KS University</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <form onSubmit={handleSubmit}>
              <MDBInput
  wrapperClass='mb-4'
  label='Email address'
  id='email'
  type='email'
  size='lg'
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  validation={errors.email ? false : true}
  errorMessage={errors.email}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Password'
  id='password'
  type='password'
  size='lg'
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  validation={errors.password ? false : true}
  errorMessage={errors.password}
/>

               <button className="btn btn-primary mb-4 px-5" type="submit">Login</button>
              </form>
              <Link className="small text-muted" to='/fac'>Faculty Login</Link>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/reg" style={{ color: '#393f81' }}>Register here</a></p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
