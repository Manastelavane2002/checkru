export function generateButtonVariants(color: string) {
  return {
    default: {
      button: `w-full bg-${color} text-white py-2 rounded-[8px]`,
    },
    text: {
      button: `text-${color} cursor-pointer px-2 rounded-md`,
      typo: ``,
      icon: ``,
    },
    link: {
      button: `cursor-pointer`,
      typo: ``,
      icon: ``,
    },
  };
}
