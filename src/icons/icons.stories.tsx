import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Icons from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Icons",
    //component: Icons,
}

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


// export const ClickMe = Template.bind({});
// ClickMe.args = {
//     label: "Click me!!!",
//     width: ButtonWidths.FIXED,
//     color: ButtonColors.DANGER,
//     type: ButtonTypes.SECONDARY,
//     theme: AppThemes.DARK,
//     disabled: false
// };

export const AllIcons = () => {
    const icons = Object.values(Icons);
    console.log(icons)
    return (
        <div className="container">
            {
                icons.map(IconComponent => <> <IconComponent /> <div>{IconComponent.name}</div> </>)
            }
        </div>
    )
}

