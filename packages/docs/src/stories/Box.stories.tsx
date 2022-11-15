import { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@ignite-ui-call/react";

export default {
    title: "Surfaces/Box",
    component: Box,
    args: {
        children: <Text>Elemento Box</Text>,
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
