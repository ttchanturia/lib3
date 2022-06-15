import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./icon";
import { AppThemes } from "../theme/types/types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;


export const ClickMe = Template.bind({});
ClickMe.args = {
    upIcon: 'accounts_receivable_large',
    fallback: 'accounts_payable_large',
    color: 'var(--up-brand-1)',
    height: '',
    width: ''
};
