import React from "react";
import {CircularProgress} from "@heroui/progress";

const PageLoader = () => {
  return (
    <div className="h-svh w-full center bg-vio">
      <CircularProgress
        color="#7f22fe"
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default PageLoader;
