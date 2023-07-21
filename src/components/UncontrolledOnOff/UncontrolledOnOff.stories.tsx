import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

const meta: Meta<typeof UncontrolledOnOff> = {
    title: 'Uncontrolled OnOff stories',
    component: UncontrolledOnOff
};

export default meta;
type Story = StoryObj<typeof UncontrolledOnOff>;

export const OnMode: Story = {
    render: () => <UncontrolledOnOff defaultOn = {true} />
};

export const OffMode: Story = {
    render: () => <UncontrolledOnOff defaultOn = {false}/>
};

export const ModeChanging: Story = {
    render: () =>  <UncontrolledOnOff/>
};