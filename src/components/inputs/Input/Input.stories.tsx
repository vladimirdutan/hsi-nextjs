import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

import AssignmentIcon from "@mui/icons-material/Assignment";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Primary Input",
    placeholder: "Judgement, enforcement order, cost assessment order",
  },
};
