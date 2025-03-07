import React, { useState } from "react";
import '../App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    photo: null,
    username: "",
    password: "",
    country: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    photo: "",
    username: "",
    password: "",
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    formErrors.firstName = /^[A-Z][a-z]*$/.test(formData.firstName)
      ? ""
      : "First name must start with a capital letter.";
    formErrors.lastName = /^[A-Z][a-z]*$/.test(formData.lastName)
      ? ""
      : "Last name must start with a capital letter.";
    formErrors.email = /[!@#$%^&*(),.?":{}|<>]/.test(formData.email)
      ? ""
      : "Email must contain a special character.";
    formErrors.mobile = /^[0-9]{10}$/.test(formData.mobile)
      ? ""
      : "Mobile number must be 10 digits.";
    formErrors.dob = formData.dob
      ? parseInt(formData.dob.split("-")[0]) >= 1980 && parseInt(formData.dob.split("-")[0]) <= 2002
        ? ""
        : "Year of birth must be between 1980 and 2002."
      : "Date of birth is required.";
    formErrors.gender = formData.gender ? "" : "Gender is required.";
    formErrors.photo = formData.photo && formData.photo.size <= 1024 * 1024 ? "" : "Photo must be less than 1MB.";
    formErrors.username = /^[A-Z][a-z]*[0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/-]*$/.test(formData.username)
      ? ""
      : "Username must start with a capital letter and contain lowercase letters, numbers, and special characters.";
    formErrors.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{6,}$/.test(formData.password)
      ? ""
      : "Password must be at least 6 characters long, with uppercase, lowercase, special characters, and numbers.";
    formErrors.feedback = formData.feedback.length <= 20 ? "" : "Feedback must be under 20 characters.";

    setErrors(formErrors);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.firstName ? "error" : "success"}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-field">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.lastName ? "error" : "success"}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.email ? "error" : "success"}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.mobile ? "error" : "success"}
          />
          {errors.mobile && <span className="error-message">{errors.mobile}</span>}
        </div>

        <div className="form-field">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.dob ? "error" : "success"}
          />
          {errors.dob && <span className="error-message">{errors.dob}</span>}
        </div>

        <div className="form-field">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.gender ? "error" : "success"}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        <div className="form-field">
          <label>Upload Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
            onBlur={validateForm}
            className={errors.photo ? "error" : "success"}
          />
          {errors.photo && <span className="error-message">{errors.photo}</span>}
        </div>

        <div className="form-field">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.username ? "error" : "success"}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.password ? "error" : "success"}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-field">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.country ? "error" : "success"}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        <div className="form-field">
          <label>Feedback:</label>
          <input
            type="text"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            onBlur={validateForm}
            className={errors.feedback ? "error" : "success"}
          />
          {errors.feedback && <span className="error-message">{errors.feedback}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;