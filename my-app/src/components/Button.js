// Reusable Button Component
export default function Button({
  children,
  className = "",
  variant = "black",
  size = "default",
  ...props
}) {
  const baseClasses =
    "rounded-full font-cinetype-bold transition-colors font-bold";

  const variants = {
    black: "bg-black text-white hover:bg-gray-800",
    white: "bg-white text-black hover:bg-gray-100 border border-gray-200",
  };

  const sizes = {
    default: "px-8 py-3 text-lg",
    thin: "px-6 py-2 text-sm",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
