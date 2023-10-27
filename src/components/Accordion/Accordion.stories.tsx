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
const onClickCallback = action("some item was clicked")

export const CollapsedMode: Story = {
    render: () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                             onClick={onClickCallback}/>
};

export const UncollapsedMode: Story = {
    render: () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback}
                             items={[{title: 'Anna', value: 1}, {title: 'Bob', value: 2}, {title: 'Stiv', value: 3}]}
                             onClick={onClickCallback}/>
};

const ModeChangingWrap = () => {
    let [value, setValue] = useState<boolean>(true)

    return (
        <Accordion titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)}
                   items={[{title: 'Anna', value: 1}, {title: 'Bob', value: 2}, {title: 'Stiv', value: 3}]}
                   onClick={onClickCallback}/>
    )
}

export const ModeChanging: Story = {
    render: () => <ModeChangingWrap/>
};