import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "../Autocomplete/index";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  argTypes: {
    options: {
      control: "object",
      description: "Array of options to be displayed in the autocomplete",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Primary: Story = {
  args: {
    options: [
      { label: "Anzeigen in Zeitungen u. a. - (1)", value: "1" },
      { label: "Ärztliche oder zahnärztliche Leistung - (2)", value: "2" },
      { label: "Anzeigen in Zeitungen u. a. - (1)", value: "1" },
    ],
  },
};
