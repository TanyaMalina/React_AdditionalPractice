import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {ItemType, Select} from "./Select";
import {Rating, RatingValueType} from "../Rating/Rating";

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

const callback = action("value change")

export const WithoutValue: Story = {
    render: () => <Select value={"none"} onChange={callback}
                          items={[
                              {title: 'Minsk', value: 1},
                              {title: 'London', value: 2},
                              {title: 'Kiev', value: 3}]}/>
};

export const WithValue: Story = {
    render: () => <WithValueWrap/>
};

const WithValueWrap = () => {
    const [selectValue, setSelectValue] = useState<ItemType>({title: 'London', value: 2})

    return <Select value={selectValue} onChange={setSelectValue}
                items={[
                    {title: 'Minsk', value: 1},
                    {title: 'London', value: 2},
                    {title: 'Kiev', value: 3}]}/>
}