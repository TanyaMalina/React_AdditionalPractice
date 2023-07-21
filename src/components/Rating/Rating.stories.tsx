import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const EmptyStars: Story = {
    render: () => <Rating value={0} onClick={x => x}/>
};

export const Rating1: Story = {
    render: () => <Rating value={1} onClick={x=>x}/>
};

const RatingWrap = () => {
    let [rating, setRating] = useState<RatingValueType>(3)
    return (
        <Rating value={rating} onClick={setRating}/>
    )
}

export const ChangeRating: Story = {
    render: () => <RatingWrap/>
};