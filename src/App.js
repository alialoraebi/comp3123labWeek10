import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeToTerms: false
  });

  const [formErrors, setFormErrors] = useState({});

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure that the user agrees to the terms and conditions
    if (!formData.agreeToTerms) {
      setFormErrors({ ...formErrors, agreeToTerms: 'You must agree to the terms and conditions.' });
      return;
    } else {
      setFormErrors({});
      setSubmittedData(formData); // Save the submitted data
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <h1>Data Entry Form</h1>
          <label className="form-group">Email:</label>
          <input className="form-group" type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>

          <label className="form-group">Full Name:</label>
          <input className="form-group" type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange}/>

          <label className="form-group">Address:</label>
          <input className="form-group" type="text" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange}/>

          <label className="form-group">Address 2:</label>
          <input className="form-group" type="text" name="address2" placeholder="Apartment, Studio, or Floor" value={formData.address2} onChange={handleChange}/>

          <label className="form-group">City:</label>
          <input className="form-group"v type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange}/>

          <label className="form-group">Province:</label>
          <select className="form-group" name="province" value={formData.province} onChange={handleChange}>
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Yukon">Yukon</option>
            </select>

          <label className="form-group">Postal Code:</label>
          <input className="form-group" type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />

          <div className="form-group">
            <label>
              <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms}onChange={handleChange}/>
              Agree to Terms and Conditions
            </label>
          </div>
          {formErrors.agreeToTerms && <p className="error">{formErrors.agreeToTerms}</p>}

          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="submission-display">
            <p>Email: {submittedData.email}</p>
            <p>Full Name: {submittedData.fullName}</p>
            <p>Address: {submittedData.address}</p>
            <p>Address 2: {submittedData.address2}</p>
            <p>City: {submittedData.city}</p>
            <p>Province: {submittedData.province}</p>
            <p>Postal Code: {submittedData.postalCode}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
