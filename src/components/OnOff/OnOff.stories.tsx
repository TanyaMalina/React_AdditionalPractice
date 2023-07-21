import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {OnOff} from "./OnOff";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff stories',
    component: OnOff
};

export default meta;
type Story = StoryObj<typeof OnOff>;

export const OnMode: Story = {
    render: () => <OnOff on={true} onClick={action("Click")}/>
};

export const OffMode: Story = {
    render: () => <OnOff on={false} onClick={action("Click")}/>
};


const ModeChangingWrap = () => {
    let [value, setValue] = useState<boolean>(true)
    return (
        <OnOff on={value} onClick={setValue}/>
    )
}

export const ModeChanging: Story = {
    render: () => <ModeChangingWrap/>
};