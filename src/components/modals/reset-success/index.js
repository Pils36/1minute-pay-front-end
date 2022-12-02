import React from "react";
import { CloseIcon } from "../../icons";
import "./resetSuccessStyles.scss";
import { motion } from "framer-motion";

function ResetSuccess({ onClose }) {
  return (
    <motion.div
      className="reset-success-container"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <p>Password saved return to App to continue</p>

      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </motion.div>
  );
}

export default ResetSuccess;
