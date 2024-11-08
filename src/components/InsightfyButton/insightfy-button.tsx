"use client";

import { AdditionalData, ModalType, useModal } from "@/store/use-modal";

interface IInsightfyButtonProps {
  width?: string;
  text: string;
  fontSize?: string;
  type: "button" | "submit" | "reset";
  variant: "contained" | "outlined";
  icon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  modalToOpen?: ModalType;
  additionalData?: AdditionalData;
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
  modalToOpen,
  additionalData,
  fontSize,
  click,
  disabled,
}: IInsightfyButtonProps) {
  const { onOpen } = useModal();

  const handleClick = () => {
    if(modalToOpen) {
      onOpen(modalToOpen);
    }

    if(click) click();
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={{ width }}
      className={`h-12 text-sm p-4 rounded-md flex items-center justify-center gap-2 hover:duration-[0.3s] duration-[0.3s] font-semibold ${disabled && "bg-insightfy-blue/50"} ${
        variant === "contained"
          ? "bg-insightfy-blue hover:bg-insightfy-blue-hover"
          : "border-solid border border-insightfy-blue hover:bg-insightfy-white-hover"
      }
      `}
    >
      {prefixIcon && prefixIcon}
      <span
        style={{ fontSize }}
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
