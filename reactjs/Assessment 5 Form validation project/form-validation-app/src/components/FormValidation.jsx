import { useState, useEffect } from "react";

const FormValidation = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Validation
  const validate = (name, value) => {
    let errorMsg = "";

    if (!value.trim()) {
      errorMsg = "This field is required";
    }

    // Name validation (no numbers)
    if (name === "name" && value) {
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(value)) {
        errorMsg = "Name should not contain numbers";
      }
    }

    // Email validation
    if (name === "email" && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMsg = "Invalid email format";
      }
    }

    // Strong password validation
    if (name === "password" && value) {
      const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!strongPassword.test(value)) {
        errorMsg =
          "Password must be 8+ chars, include capital, small, number & special symbol";
      }
    }

    // Confirm password
    if (name === "confirmPassword" && value) {
      if (value !== formData.password) {
        errorMsg = "Passwords do not match";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    validate(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((key) => {
      validate(key, formData[key]);
    });

    const hasErrors = Object.values(errors).some((err) => err);

    if (
      hasErrors ||
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setSuccess("");
      return;
    }

    setSuccess("Form submitted successfully ✅");
    localStorage.removeItem("formData");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="app-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        {/* Password */}
        <div className="form-group" style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password ? "error-input" : ""}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "8px",
              cursor: "pointer"
            }}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group" style={{ position: "relative" }}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword ? "error-input" : ""}
          />
          <span
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            style={{
              position: "absolute",
              right: "10px",
              top: "8px",
              cursor: "pointer"
            }}
          >
            {showConfirmPassword ? "🙈" : "👁"}
          </span>
          {errors.confirmPassword && (
            <div className="error-message">
              {errors.confirmPassword}
            </div>
          )}
        </div>

        <button type="submit">Submit</button>

        {success && <div className="success">{success}</div>}
      </form>
    </div>
  );
};

export default FormValidation;