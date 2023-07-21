import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'Uncontrolled Accordion',
    component: UncontrolledAccordion
};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>;

const callback = action("accordion mode change even fired")

export const ModeChanging: Story = {
    render: () => <UncontrolledAccordion />
};