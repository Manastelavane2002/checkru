import * as React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: string;
}

export function Button({ variant = 'Default', label, onClick }: ButtonProps) {
  if (variant === 'text') {
    return (
      <button
        className="text-primary cursor-pointer px-2 rounded-md"
        onClick={onClick}
        type="submit">
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="submit"
      className="w-full bg-primary text-white py-2 rounded-[8px]">
      {label}
    </button>
  );
}

Button.defaultProps = {
  variant: null,
};
