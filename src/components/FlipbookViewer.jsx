import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import PropTypes from 'prop-types';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image">
          {props.children}
        </div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

const FlipbookViewer = ({ content }) => {
  const book = useRef();
  const flipbookContainerRef = useRef();

  // Download PDF logic (assume filename is available on content)
  const handleDownload = () => {
    if (content.filename) {
      const link = document.createElement('a');
      link.href = `/newsletters/${content.filename}`;
      link.download = content.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div ref={flipbookContainerRef} className="relative flex flex-col items-center justify-center w-full h-full">

      {/* Flipbook */}
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        showCover={true}
        mobileScrollSupport={true}
        className="mx-auto"
        ref={book}
      >
        {/* Content Pages */}
        {content.images && content.images.map((img, idx) => (
          <Page key={idx}>
            <div className="h-full w-full bg-white flex items-center justify-center">
              <img src={img} alt={`Page ${idx + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
          </Page>
        ))}
      </HTMLFlipBook>
      {/* Download PDF Button */}
      {content.filename ? (
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={handleDownload}
            className="bg-black hover:bg-gray-900 text-white font-semibold rounded px-6 py-3 shadow flex items-center gap-2"
            title="Download PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 5.25V19.5A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25v-1.25" />
            </svg>
            Download PDF
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center mt-6">
          <span className="text-gray-400 italic">No PDF available for download.</span>
        </div>
      )}
    </div>
  );
};

FlipbookViewer.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default FlipbookViewer;
