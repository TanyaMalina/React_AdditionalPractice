import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UncontrolledRating} from './UncontrolledRating';
import React, {useState} from "react";

const meta: Meta<typeof UncontrolledRating> = {
    title: 'Uncontrolled rating stories',
    component: UncontrolledRating
};

export default meta;
type Story = StoryObj<typeof UncontrolledRating>;



export const EmptyStars: Story = {
    render: () => <UncontrolledRating defaultValue={0}/>
};

export const Rating1: Story = {
    render: () => <UncontrolledRating defaultValue={1}/>
};

export const ChangeRating: Story = {
    render: () => <UncontrolledRating/>
};