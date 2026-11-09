
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-[#23588d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#005A9C] transition-colors disabled:opacity-50">
      {label}
    </button>
  );
}
