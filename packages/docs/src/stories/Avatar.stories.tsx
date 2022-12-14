import { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui-call/react";

export default {
    title: "Data display/Avatar",
    component: Avatar,
    args: {
        src: "https://github.com/douglasscaini.png",
        alt: "Douglas Scaini",
    },
    argTypes: {
        src: {
            control: {
                type: "text",
            },
        },
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
};
