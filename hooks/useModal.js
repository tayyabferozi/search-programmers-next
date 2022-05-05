import { useEffect, useState } from "react";

const useModal = (isActive) => {
  const [isModalActive, setIsModalActive] = useState();

  const toggleModalActive = () => {
    setIsModalActive((prevState) => !prevState);
  };

  useEffect(() => {
    setIsModalActive(!!isActive);
  }, [isActive]);

  return { show: isModalActive, toggleShow: toggleModalActive };
};

export default useModal;
