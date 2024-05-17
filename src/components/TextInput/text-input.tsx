interface Props {
  value: string;
  placeholder: string;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  change: () => void;
}

function TextInput({ value, placeholder, suffixIcon, change }: Props) {
  return (
    <div className="block relative">
      <input
        className="border-solid border border-[#8A8A8E] rounded-lg p-2 pl-4 placeholder:text-placeholder-text focus:outline-none focus:ring-2 focus:ring-insightfy-blue"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={change}
      />
    </div>
  );
}

export default TextInput;
