import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const callback = action("accordion mode change even fired")

export const CollapsedMode: Story = {
    render: () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback}/>
};

export const UncollapsedMode: Story = {
    render: () => <Accordion titleValue={"Menu"} collapsed={false} onClick={callback}/>
};

const ModeChangingWrap = () => {
    let [value, setValue] = useState<boolean>(true)

    return (
        <Accordion titleValue={"Menu"} collapsed={value} onClick={()=>setValue(!value)}/>
    )
}

export const ModeChanging: Story = {
    render: () => <ModeChangingWrap/>
};