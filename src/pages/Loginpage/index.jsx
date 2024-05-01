import React from "react";
// import { Helmet } from "react-helmet";
import { Img } from "../../components";
import LoginPageLogin from "../../features/authentication/LoginForm";

export default function LoginpagePage() {
  return (
    <>
      {/* login container section */}
      <div className="flex h-[1024px] w-full items-center justify-center bg-white-A700 bg-[url(/public/images/img_login_page.png)] bg-cover bg-no-repeat px-14 py-[85px] md:h-auto md:p-5">
        {/* login form section */}
        <div className="mx-auto my-[97px] flex w-full max-w-[1270px] rounded-[40px] shadow-xs">
          {/* login fields section */}
          <div className="flex w-full items-center justify-between gap-5 rounded-[40px] bg-white-A700 pr-[100px] md:flex-col md:pr-5">
            {/* logo section */}
            <Img
              src="images/img_image_1.png"
              alt="imageone"
              className="h-[660px] w-[46%] object-cover md:w-full"
            />

            {/* credentials section */}
            <LoginPageLogin className="flex w-[46%] flex-col items-start gap-[29px] md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
