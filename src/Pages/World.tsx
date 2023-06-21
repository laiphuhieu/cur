import React, { useCallback, useState } from "react";
import Button3 from "@/components/Button3/Button3";
// import Toast from "@/components/Toast/Toast";
import Toast2 from "@/components/Toast2/Toast2";

const World = () => {
  const [isToastShowing, setToastShowing] = useState(false);
  const handleClick = useCallback(() => {
    setToastShowing(true);
  }, []);

  return (
    <div>
      <Button3 action={handleClick} label="Trigger" />
      {/* {isToastShowing && (
        <Toast
          label="World"
          isShow={isToastShowing}
          onClose={() => {
            setToastShowing(false);
          }}
        />
      )} */}

      {isToastShowing && (
        <Toast2
          label="World 2"
          isShow={isToastShowing}
          onClose={() => setToastShowing(false)}
        />
      )}
    </div>
  );
};

export default World;
