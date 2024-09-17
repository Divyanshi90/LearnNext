"use client";
import { useRouter } from 'next/navigation';
import CustomButton from "@/components/CustomButton";

interface Props {
  buttonText: string;
  path: string;
}

function NavigateButton({ buttonText, path }: Props) {
  const router = useRouter();

  const handleGenerateClick = () => {
    router.push(path);
  };

  return (
    <CustomButton
      buttonText={buttonText}
      gradientButton
      circular
      handleClick={handleGenerateClick}
      textBig
    />
  );
};

export default NavigateButton;
