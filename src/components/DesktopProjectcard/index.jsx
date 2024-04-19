import React from "react";
import { Text, Img } from "./..";

export default function DesktopProjectcard({
  projectcounter = "Project 1",
  projectType = "Web",
  duration = "Edited Seconds ago",
  ...props
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        isHovered ? "shadow-md" : "shadow"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="flex flex-col self-stretch gap-[2px] p-2.5 border-gray-500_99 border border-solid rounded-[30px]">
        <div className="p-[7px] bg-blue_gray-100 rounded-[20px]">
          <div
            className={`w-full h-full overflow-hidden rounded-[20px] ${
              isHovered ? "hovered" : ""
            }`}
          >
            <Img
              src="images/img_image_place.png"
              alt="project_one_one"
              className={`w-full h-full object-cover`}
            />
          </div>
        </div>
        <div className="flex gap-[3px]">
          <Text as="p" className="self-end !font-medium">
            {projectcounter}
          </Text>
          <Text as="p" className="self-start !text-gray-600 !font-medium">
            - {projectType}
          </Text>
        </div>

        <div style={{ display: "inline-block" }}>
          <Text
            as="p"
            className="mb-[10px] !text-gray-500_02 !font-medium"
            style={{ display: "inline-block" }}
          >
            {duration}
          </Text>{" "}
          {isHovered && (
            <div style={{ display: "inline-block", verticalAlign: "middle" }}>
              <button
                className="p-1 rounded-md transition-colors duration-500 hover:bg-gray-300"
                style={{ display: "inline-block", marginLeft: "170px" }}
                onClick={ProjectOptionsOnClick}
              >
                <img src="images/option.png" alt="B" className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}

function ProjectOptionsOnClick() {
  alert("ProjectOptions Btn Clicked");
}