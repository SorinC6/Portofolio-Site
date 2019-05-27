import React from "react";
import { PDFObject } from "react-pdfobject";
import resume from "../assets/Resume.pdf";
import { Modal } from "reactstrap";

const PDF = ({ isOpen, toggle }) => {
  retrun(
    <Modal>
      <PDFObject url={resume} height="600px" />
    </Modal>
  );
};

export default PDF;
