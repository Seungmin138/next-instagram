type Props = {
  text: string;
  onCLick: () => void;
  red?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  onCLick,
  red,
  disabled = false,
}: Props) {
  return (
    <button
      className={`border-none rounded-md py-2 px-8 text-white font-bold leading-4 ${
        red ? "bg-red-500" : "bg-sky-500"
      } ${disabled && "opacity-80"}`}
      onClick={() => onCLick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
