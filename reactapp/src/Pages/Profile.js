import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Image2 from '../Components/pp.jpg';
import Nav from '../Components/Nav';

export default function ProfilePage() {
  return (
    <><Nav /><section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">


              <MDBRow>
                  <MDBCol lg="4">
                      <MDBCard className="mb-4">
                          <MDBCardBody className="text-center">
                              <MDBCardImage
                                  src={Image2}
                                  alt=""
                                  className="rounded-circle"
                                  style={{ width: '150px' }}
                                  fluid />
                              <p className="text-muted mb-1"></p>
                              <p className="text-muted mb-4"></p>

                          </MDBCardBody>
                      </MDBCard>

                      <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody className="p-0">
                              <MDBListGroup flush className="rounded-3">
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fas icon="globe fa-lg text-warning" />
                                      <MDBCardText>12890MAI02</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                      <MDBCardText>12890mai02@ks.ac.in</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                      <MDBCardText>2nd Year</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                      <MDBCardText>1 backlogs</MDBCardText>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                      <MDBCardText>Hosteller</MDBCardText>
                                  </MDBListGroupItem>
                              </MDBListGroup>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8">
                      <MDBCard className="mb-4">
                          <MDBCardBody>
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Full Name</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Pavan Kumar</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Email</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">pavankumar@gmail.com</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Phone</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">9345788502</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Mobile</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">9345788502</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Address</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Bargur, Krishnagiri, TamilNadu</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                          </MDBCardBody>
                      </MDBCard>

                      <MDBRow>
                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Master of AI</span>current pursuing degree</MDBCardText>
                                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Overall Performance</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={60} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Attendance</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={52} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Lab Attendance</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={59} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Weekly Test</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Semester</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={36} valuemin={0} valuemax={100} />
                                      </MDBProgress>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Assigment</span> Project Status</MDBCardText>
                                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>ML</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Data Mining</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={62} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>DeepLearning</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={19} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Face Detection    </MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                      </MDBProgress>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Numpy & Pandas</MDBCardText>
                                      <MDBProgress className="rounded">
                                          <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                      </MDBProgress>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>
                      </MDBRow>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </section></>
  );
}