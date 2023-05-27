import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";
import CreateStudent from "../Logic/CreateStudent";

export default function SignupStudent() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      departmentId: "", // Add departmentId field with empty string value
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
    },
    onSubmit: (values) => {
      const {
        firstName,
        lastName,
        departmentId,
        email,
        password,
        phoneNumber,
        gender,
      } = values;
      CreateStudent({
        firstName,
        lastName,
        departmentId: parseInt(departmentId), // Convert to integer if necessary
        email,
        password,
        phoneNumber,
        gender,
      }).then((valid) => {
        if (valid) {
          console.log("Data Successfully sent" + JSON.stringify(values));
          alert("Data Successfully sent" + JSON.stringify(values));
          navigate("/StudentDashboard");
        }
      });
    },
  });

  const inputs = [
    { title: "Email", type: "email", placeholder: "Eg:abc123@gmail.com" },
    { title: "Password", type: "password", placeholder: "Enter password" },
  ];

  const RenderInputs = () => {
    return inputs.map((item) => {
      return (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="text-sm">{item.title}</p>
          <input
            type={item.type}
            name={item.title.toLowerCase()}
            id={item.title}
            placeholder={item.placeholder}
            onBlur={formik.handleChange}
            className="container pl-4 pr-16 py-2"
            defaultValue={formik.values[item.title.toLowerCase()]}
            required
          />
        </div>
      );
    });
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-fit flex flex-col gap-6 justify-center self-center"
    >
      <div className="flex flex-col gap-4 w-fit">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm">First Name</p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Eg: Ibrahim"
              onChange={formik.handleChange}
              className="container pl-4 pr-16 py-2"
              value={formik.values.firstName}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Last Name</p>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Eg: Ibrahim"
              onChange={formik.handleChange}
              className="container pl-4 pr-16 py-2"
              value={formik.values.lastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Phone Number</p>
          <input
            type="number"
            inputmode="decimal"
            name="phoneNumber"
            id="phoneNumber"
            className="container pl-4 max-md:pr-16 md:pr-20 py-2"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Gender</p>
          <select
            name="gender"
            id="gender"
            className="container pl-4 max-md:pr-16 md:pr-20 py-2 bg-white"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Retarded</option>
          </select>
          {formik.touched.departmentId && formik.errors.departmentId && (
            <div className="error">{formik.errors.departmentId}</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Department</p>
          <select
            name="departmentId"
            id="departmentId"
            className="container pl-4 max-md:pr-16 md:pr-20 py-2 bg-white"
            value={formik.values.departmentId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Department</option>
            <option value="1">Computer Science</option>
            <option value="2">Marketing</option>
            <option value="3">Software Engineering</option>
            <option value="4">Accounting</option>
            <option value="5">Management</option>
            <option value="6">Architecture</option>
          </select>
          {formik.touched.departmentId && formik.errors.departmentId && (
            <div className="error">{formik.errors.departmentId}</div>
          )}
        </div>
        <RenderInputs />
      </div>
      <div className="flex flex-row gap-2 justify-start">
        <input type="checkbox" name="terms" id="terms" required />
        <p className="text-sm self-center">
          I agree with{" "}
          <span className="colored-mini-text font-semibold">
            Terms & Conditions
          </span>
        </p>
      </div>

      <p className="text-sm self-center">
        Already have an account?{" "}
        <span
          className="colored-mini-text font-semibold login"
          onClick={() => navigate("/Signin")}
        >
          Login
        </span>
      </p>
      <input
        type="submit"
        value="Sign up"
        className="submit-btn flex justify-center self-center"
      />
    </form>
  );
}
