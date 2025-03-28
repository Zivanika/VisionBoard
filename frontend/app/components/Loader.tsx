import React from "react";
import {CircularProgress} from "@heroui/progress";

const BtnLoader = () => {
  return (
    <CircularProgress
      color="#ffffff"
      size={5}
      aria-label="Loading Spinner"
    />
  );
};

export default BtnLoader;
