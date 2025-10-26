import React from "react";

/* Reusable Input Component */
export const InputUI = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  name,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium  text-gray-700 ">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`text-sm border border-gray-300 rounded
           p-2 focus:outline-none focus:ring-1 focus:ring-green-500
            transition duration-200 ${className}`}
      />
    </div>
  );
};

/* Reusable Select Component */
export const SelectInput = ({
  label,
  name,
  options = [],
  className = "",
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700 ">
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`text-sm border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-100 ${className}`}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || ""}>
            {opt.label || opt.value || "Unknown"}
          </option>
        ))}
      </select>
    </div>
  );
};
