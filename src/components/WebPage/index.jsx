import React from "react";
import { Button, Img, Text } from "./..";

export default function WebPage({ pageone = "Home", iconbutton, ...props }) {
  return (
    <div {...props}>
      <div className="flex justify-center items-start ml-[60px] gap-2.5">
        <Img src="images/img_left_icon.svg" alt="home_one" className="h-[22px] w-[22px]" />
        <Text as="p">{pageone}</Text>
      </div>
      <div className="flex flex-col w-[12%] mr-[18px]">
        {!!iconbutton ? (
          <Button color="light_blue_600" size="sm" shape="round" className="w-[35px] !rounded-lg">
            <Img src="images/img_group_2.svg" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
