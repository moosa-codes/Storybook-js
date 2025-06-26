import { Meta, StoryObj } from '@storybook/react';
import TextInput from "./TextInput/Text-input"

const meta = {
    component: TextInput,
    title: 'UI-elements/TextInput',
}

export const Template = {
    args: {
        label: "Strange",
        backgroundColor: "gray",
        placeholder: "type something...",
        // className: "text-input"
    },
}


export default meta;

