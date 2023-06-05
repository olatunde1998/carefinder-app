// import { type } from "os";

interface buttonProps {
  className?: string;
  inputIcon: any;
  label: string;
  type?: string;
  placeholder?: string;
  inputValue?: string;
  onChangeValue?: any;
}

export default function Input({ className, inputIcon, label, type, placeholder, inputValue, onChangeValue }: buttonProps) {
  return (
    <div>
      <label htmlFor="name" className="mb-1 block text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeValue}
        className={`px-8 py-3 cursor-pointer  flex justify-between rounded-lg w-full transition duration-700 ease-in-out ${className}`}
      />
      <span>{inputIcon}</span>
    </div>
  );
}
