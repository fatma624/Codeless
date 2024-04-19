import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button } from "../../components";
import WebChangemode from "../../components/WebChangemode";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Codeless</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full bg-white-A700">
        <div>
          <header className="p-1.5 border-gray-400 border-b border-solid bg-white-A700 shadow-sm">
            <div className="w-full mx-auto md:p-3 max-w-[1320px]">
              <div className="flex sm:flex-col justify-between items-center gap-5">
                <div className="flex justify-between w-[27%] sm:w-full gap-5">
                  <Img
                    src="images/img_logo_menu.png"
                    alt="logomenu_one"
                    className="w-[20%] object-cover"
                  />
                  <WebChangemode className="flex items-center p-0.5 bg-gray-100 rounded-[10px]" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <Button
                    color="white_A700"
                    shape="round"
                    className="!text-blue_gray-900 border-gray-500 border border-solid min-w-[47px]"
                  >
                    Share
                  </Button>
                  <Button
                    size="lg"
                    shape="round"
                    leftIcon={
                      <Img
                        src="images/img_vector_white_a700_20x20.svg"
                        alt="Vector"
                      />
                    }
                    className="gap-2.5 min-w-[96px]"
                  >
                    Publish
                  </Button>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Adding iframe to embed the other application */}
        <div className="iframe-container">
          <iframe
            title="Other Application"
            src="http://localhost:8080/" // Replace with the URL of your other application
            width="100%"
            height="700px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
