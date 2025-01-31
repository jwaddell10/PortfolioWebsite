import { Document, Page } from 'react-pdf';
import DevResume from "../assets/DevResume.pdf";

export default function Resume() {
  return (
    <div>
      <Document file={DevResume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}