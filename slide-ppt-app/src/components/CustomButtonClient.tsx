"use client";
import { useRouter } from 'next/navigation';
import CustomButton from "@/components/CustomButton";

const CustomButtonClient = () => {
  const router = useRouter();

  const handleGenerateClick = () => {
    router.push('/generate'); 
  };

  return (
    <CustomButton
      buttonText={"Create a Presentation Now"}
      gradientButton
      circular
      handleClick={handleGenerateClick}
      textBig
    />
  );
};

export default CustomButtonClient;
