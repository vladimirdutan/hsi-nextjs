import type { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";
import ShareIcon from "@mui/icons-material/Share";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: <ShareIcon />,
  },
};
