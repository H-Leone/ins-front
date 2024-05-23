interface IInsightfyButtonProps {
  text: string;
  variant: "contained" | "outlined";
  icon?: React.ReactNode;
  click: () => void;
  disabled: boolean;
}

function InsightfyButton({
  text,
  variant,
  icon,
  click,
  disabled,
}: IInsightfyButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={click}
      className={`p-4 rounded-md flex align-center justify-center gap-2 hover:duration-[0.3s] duration-[0.3s] ${
        variant === "contained"
          ? "bg-insightfy-blue hover:bg-insightfy-blue-hover"
          : "border-solid border border-insightfy-blue hover:bg-insightfy-white-hover"
      }   `}
    >
      <span
        className={`${
          variant === "contained" ? "text-white" : "text-insightfy-blue"
        }`}
      >
        {text}
      </span>
      {icon && icon}
    </button>
  );
}

export default InsightfyButton;
