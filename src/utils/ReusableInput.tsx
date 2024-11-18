import { InputProps } from "@/Types/allTypes";

export default function ReusableInput({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="text"
        className="input-field"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
