import { useEffect } from "react";
import useToastStore from "../../store/toastStore";

function Toast() {
  const { isOpen, message, hideToast } = useToastStore();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    //토스트가 열린 후 7초후에 자동으로 닫힘
    const timer = setTimeout(() => {
      hideToast();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isOpen, hideToast]);

  //토스트가 열려있지 않으면 렌더링 안 함
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed right-[30px] top-[80px] ">
      <div className=" flex  justify-center items-center w-[300px] h-[80px] rounded-[16px]  bg-[#212122] px-[32px] py-[24px] text-[24px]  text-[#ffff]">
        {message}
      </div>
    </div>
  );
}

export default Toast;
