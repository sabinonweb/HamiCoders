import React, { ReactNode } from "react";
import ReactDom from "react-dom";

interface SquadModalProps {
  children: ReactNode;
}

const SquadModal: React.FC<SquadModalProps> = ({ children }) => {
  return ReactDom.createPortal(
    <div className="text-white">{children}</div>,
    document.getElementById("root")
  );
};

export default SquadModal;
