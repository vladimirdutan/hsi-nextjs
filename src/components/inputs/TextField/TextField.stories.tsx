import type { Meta, StoryObj } from "@storybook/react";
import TextField from ".";
import SearchIcon from "@mui/icons-material/Search";

const meta: Meta<typeof TextField> = {
  title: "Components/Input",
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    placeholder: "Judgement, enforcement order, cost assessment order",
  },
};
export const NumberInput: Story = {
  args: {
    placeholder: "0,00",
    inputType: "number",
  },
};
export const PrimaryWithIcon: Story = {
  args: {
    placeholder: "Judgement, enforcement order, cost assessment order",
    InputProps: {
      endAdornment: <SearchIcon sx={{ fontSize: 17 }} />,
    },
  },
};
