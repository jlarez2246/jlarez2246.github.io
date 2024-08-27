import React from "react";
import { Collapse } from "react-collapse";
import { MdAdd, MdRemove } from "react-icons/md";

function ExperienceCard({ open, toggle, title, text }) {
  return (
    <div className="shadow-[0px_3px_10px_rgba(0,0,0,0.3)] mb-6">
      <div
        className={
          "text-xl p-4 flex justify-between items-center bg-bg-primary cursor-pointer duration-300 hover:bg-primary " +
          (open ? "bg-primary" : " ")
        }
        onClick={toggle}
      >
        <p className="text-[22px] text-semibold">{title}</p>
        <div className="text-[30px]">{open ? <MdRemove /> : <MdAdd />}</div>
      </div>

      <Collapse isOpened={open}>{text}</Collapse>
    </div>
  );
}

export default ExperienceCard;
