import React from "react";
import "../css/Resume.css";
import Header from "../components/Header";
import resumePDF from "../assets/Resume.pdf";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      resize: null,
    };
  }

  componentDidMount() {
    this.resizeScreen();
    window.addEventListener("resize", this.resizeScreen.bind(this));
  }

  resizeScreen() {
    let width = window.innerWidth;  //width of window 

    if (width >= 1200) { 
      this.setState({ resize: 1000 });
    } else if (width >= 992) {
      this.setState({ resize: 882 });
    } else if (width >= 668) {
      this.setState({ resize: 558 });
    } else if (width >= 480) {
      this.setState({ resize: 380 });
    } else {
      this.setState({ resize: 300 });
    }
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="resume-container">
        <Header
          heading="My Resume"
          subheading="Contact me if anything stands out"
        />
        <Document
          file={resumePDF}
          className="resume-pdf"
          loading="Loading Resume..."
        >
          <Page
            pageNumber={pageNumber}
            width={this.state.resize}
            className="pdf-page"
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    );
  }
}
export default Resume;
