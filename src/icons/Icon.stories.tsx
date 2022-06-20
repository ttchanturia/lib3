import React from "react"
import HomeMedium from './HomeMedium'
import IdeaMedium from './IdeaMedium'
import Icon from './Icon'
import { ComponentStory } from "@storybook/react"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Icon",
    component: Icon,
}

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;


export const TemplateIcons = Template.bind({});
TemplateIcons.args = {
    width: '32',
    height: '32',
    color: 'var(--up-brand-1)',
    icon: IdeaMedium
}



