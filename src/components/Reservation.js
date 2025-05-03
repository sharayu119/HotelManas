import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReservationContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px 50px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url('/images/diningimg.jpg') center/cover no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReservationWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ReservationInfo = styled.div`
  flex: 1;
  color: white;
  padding: 2rem;
  animation: slideInLeft 1s ease-out;

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const InfoTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  color: #ffd700;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #f0f0f0;
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #f0f0f0;

  svg {
    margin-right: 1rem;
    color: #ffd700;
  }
`;

const ReservationForm = styled.form`
  flex: 1;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  animation: slideUp 0.8s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FormTitle = styled.h3`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Playfair Display', serif;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ffd700;
    margin: 15px auto 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.1);
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1.2rem;
  background-color: #ffd700;
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #e6c200;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: new Date(),
    time: '19:00',
    occasion: 'regular',
    specialRequests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation details:', formData);
    setSubmitted(true);
  };

  return (
    <ReservationContainer>
      <ReservationWrapper>
        <ReservationInfo>
          <InfoTitle>Reserve Your Table</InfoTitle>
          <InfoText>
            Experience the finest Indian cuisine in an elegant setting. Our expert staff
            is dedicated to making your dining experience memorable. We recommend making
            reservations in advance to ensure your preferred dining time.
          </InfoText>
          <ContactInfo>
            <ContactItem>
              📍 Location: Kolhapur,Pune-Bengaluru Highway,opposite DSK Toyota,Varye,Satara,Maharashtra-415011
            </ContactItem>
            <ContactItem>
              📞 Phone: 9923887001
            </ContactItem>
            <ContactItem>
              ⏰ Hours: Mon-Sun: 11:00 AM - 11:00 PM
            </ContactItem>
          </ContactInfo>
        </ReservationInfo>

        <ReservationForm onSubmit={handleSubmit}>
          <FormTitle>Book Your Experience</FormTitle>
          
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </FormGroup>

          <FormGroup>
            <Label>Phone</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </FormGroup>

          <FormGroup>
            <Label>Number of Guests</Label>
            <Select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Date</Label>
            <StyledDatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Time</Label>
            <Select
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              {['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
                '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Occasion</Label>
            <Select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="regular">Regular Dining</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business Dinner</option>
              <option value="special">Special Occasion</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Special Requests</Label>
            <Input
              as="textarea"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requests or dietary requirements?"
              style={{ height: '100px', resize: 'vertical' }}
            />
          </FormGroup>

          <Button type="submit">Confirm Reservation</Button>

          {submitted && (
            <SuccessMessage>
              Thank you for your reservation! We will confirm your booking shortly via email or phone.
            </SuccessMessage>
          )}
        </ReservationForm>
      </ReservationWrapper>
    </ReservationContainer>
  );
};

export default Reservation; 