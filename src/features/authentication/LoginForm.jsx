import React from "react";
import { Input } from "../../components/Input";
// import { CheckBox } from "./..";
import { LoginButton } from "components/LoginButton";
import { LoginText } from "components/LoginText";
import { Link } from "react-router-dom";

// import { useState } from "react";
// import { useLogin } from "../../features/authentication/useLogin";

export default function LoginPageLogin({
  emailaddress = "Email Address",
  password = "Password",
  loginbutton = "Log in",
  confirmation = "Don’t have an account? ",
  startforfree = "sign up for free",
  ...props
}) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    // e.preventDefault();
    // if (!email || !password) return;
    // login({ email, password });
    // onSettled: () => {
    //   setEmail("");
    //   setPassword("");
    // },
  }
  // );

  return (
    <div {...props} onSubmit={handleSubmit}>
      <div className="flex flex-col items-start gap-[5px] self-stretch">
        <LoginText
          size="s"
          as="p"
          className="ml-[19px] md:ml-0"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          // disabled={isLoading}
        >
          {emailaddress}
        </LoginText>
        <Input
          shape="round"
          name="email"
          placeholder={`example@gmail.com`}
          className="sm:pr-5"
        />
      </div>
      <div className="flex flex-col items-start gap-[5px] self-stretch">
        <LoginText
          size="s"
          as="p"
          className="ml-[19px] md:ml-0"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        >
          {password}
        </LoginText>
        <Input
          shape="round"
          name="password"
          placeholder={`**********`}
          className="sm:pr-5"
        />
      </div>
      {/* <CheckBox
        name="rememberme"
        label="Remember me"
        id="rememberme"
        className="ml-[19px] p-px text-left text-base text-gray-700 md:ml-0"
      /> */}
      <LoginButton
        shape="round"
        className="w-full sm:px-5, login-button"
        onClick={LoginonClick}
      >
        {loginbutton}
      </LoginButton>
      <div className="ml-[19px] flex items-start gap-1 md:ml-0">
        <LoginText as="p" className="!text-gray-700, text-confirmation">
          {confirmation}
        </LoginText>
        <div className="flex pb-[5px]">
          {/* disabled={isLoading} */}
          <button as="p" className=" text-registration">
            <Link to="/registration"> {startforfree} </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginonClick() {
  window.location.href = "/desktop";
}

// import { useState } from "react";
// import Button from "../../ui/Button";
// import Form from "../../ui/Form";
// import Input from "../../ui/Input";
// import FormRowVertical from "../../ui/FormRowVertical";
// // import { useLogin } from "./useLogin";
// //import SpinnerMini from "../../ui/SpinnerMini";
// import { Link } from "react-router-dom";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const { login, isLoading } = useLogin();

//   function handleSubmit(e) {
//     // e.preventDefault();
//     // if (!email || !password) return;
//     // login({ email, password });
//     // onSettled: () => {
//     //   setEmail("");
//     //   setPassword("");
//     // },
//   }
//   // );

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormRowVertical label="Email address">
//         <Input
//           type="email"
//           id="email"
//           // This makes this form better for password managers
//           autoComplete="username"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           // disabled={isLoading}
//         />
//       </FormRowVertical>

//       <FormRowVertical label="Password">
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           // disabled={isLoading}
//         />
//       </FormRowVertical>
//       <FormRowVertical>
//         {/* disabled={isLoading} */}
//         <Button size="large">
//           <Link to="/desktop">login</Link>
//         </Button>
//       </FormRowVertical>
//     </Form>
//   );
// }

// export default LoginForm;
