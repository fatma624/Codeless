import React from "react";
import { Text, Img, Button } from "./..";

export default function WebChangemode({ frontEnd = "Front End", backend = "Back End", ...props }) {
  return (
    <div {...props}>
      <Button
        color="white_A700"
        size="xs"
        shape="round"
        leftIcon={<Img src="images/img_icons.svg" alt="icons" />}
        className="gap-2.5 min-w-[114px]"
      >
        {frontEnd}
      </Button>
      <Img src="images/img_icons_black_900.svg" alt="icons_one" className="h-[26px] ml-5" />
      <Text size="xs" as="p" className="ml-2.5">
        {backend}
      </Text>
    </div>
  );
}
