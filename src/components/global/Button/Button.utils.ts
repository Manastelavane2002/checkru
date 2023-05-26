export function generateButtonVariants(color: string) {
  return {
    fullWidth: {
      button: `w-full bg-${color} text-white py-2 rounded-[8px] disabled:bg-red-900 disabled:text-gray-300`,
    },
    text: {
      button: `text-primary cursor-pointer px-2 rounded-md`,
      typo: ``,
      icon: ``,
    },
    outlined: {
      button: 'py-2 border-2 border-cellDividerStroke rounded-lg text-white',
      typo: ``,
      icon: ``,
    },
    default: {
      button: ` bg-${color} text-white py-2 rounded-[8px]`,
      typo: ``,
      icon: ``,
    },
  };
}
