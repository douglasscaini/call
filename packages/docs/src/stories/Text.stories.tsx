import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, voluptatem deleniti asperiores earum, consectetur veritatis maxime fugit maiores suscipit ipsam necessitatibus cupiditate dolores. Tempore odit, rem sequi eum voluptatum ipsum.",
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong text...",
        as: "strong",
    },
};
