"use client";
import { useRouter } from 'next/navigation';
import CustomButton from "@/components/CustomButton";

interface IProps {
  buttonText: string;
}



const CustomButtonClient = ({buttonText}: IProps) => {
  const router = useRouter();

  const handleGenerateClick = () => {
    router.push('/generate'); 
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

export default CustomButtonClient;
