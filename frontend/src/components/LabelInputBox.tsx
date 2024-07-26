import { ChangeEvent } from "react";

interface labelInputTypes {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }
  
  export  function LabelInputBox({
    label,
    placeholder,
    onChange,
    type,
  }: labelInputTypes) {
    return (
      <>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 pt-4 text-sm font-bold text-gray-900"
          >
            {label}
          </label>
          <input
            onChange={onChange}
            type={type || "text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={placeholder}
            required
          />
        </div>
      </>
    );
  }