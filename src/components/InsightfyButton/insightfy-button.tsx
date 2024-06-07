interface IInsightfyButtonProps {
  width?: string;
  text: string;
  type: "button" | "submit" | "reset";
  variant: "contained" | "outlined";
  icon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  click?: () => void;
  disabled: boolean;
}

function InsightfyButton({
  width,
  text,
  type,
  variant,
  icon,
  prefixIcon,
  click,
  disabled,
}: IInsightfyButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={click}
      style={{ width: width }}
      className={`p-4 rounded-md flex align-center justify-center gap-2 hover:duration-[0.3s] duration-[0.3s] ${
        variant === "contained"
          ? "bg-insightfy-blue hover:bg-insightfy-blue-hover"
          : "border-solid border border-insightfy-blue hover:bg-insightfy-white-hover"
      }
      `}
    >
      {prefixIcon && prefixIcon}
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
