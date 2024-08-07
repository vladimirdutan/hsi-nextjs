import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./index";

import AssignmentIcon from "@mui/icons-material/Assignment";

const meta: Meta<typeof MyButton> = {
  title: "Components/Button",
  component: MyButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "contained",
    color: "secondary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
    color: "primary",
  },
};
export const IconButton: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
    color: "primary",
    startIcon: <AssignmentIcon />,
  },
};
