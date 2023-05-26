import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AuthTeacher from "../Logic/AuthUser";

export default function SigninTeacher() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      usertype: "teachers",
    },
    onSubmit: (values) => {
      AuthTeacher(values)
        .then((valid) => {
          if (valid) {
            navigate("/TeacherDashboard", {
              state: {
                email: values.email,
              },
            });
          } else {
            alert("Incorrect Password or Email");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });
  const inputs = [
    {
      title: "Email",
      placeHolder: "abc123@gmail.com",
      type: "email",
    },
    {
      title: "Password",
      placeHolder: "Enter password",
      type: "password",
    },
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
            placeholder={item.placeHolder}
            className="container pl-4 pr-16 py-2"
            onBlur={formik.handleChange}
            defaultValue={formik.values[item.title.toLowerCase()]}
            required
            size="33"
          />
        </div>
      );
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-4 w-fit">
        <RenderInputs />
        <p className="text-sm self-center">
          Don't have an account?{" "}
          <span
            className="colored-mini-text font-semibold login"
            onClick={() => navigate("/Signup")}
          >
            Signup
          </span>
        </p>
        <input
          type="submit"
          value="Login"
          className="submit-btn flex justify-center self-center"
        />
      </div>
    </form>
  );
}
