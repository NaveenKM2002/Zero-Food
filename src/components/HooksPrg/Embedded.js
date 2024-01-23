import React from 'react';

const EmbeddedForm = () => {
  return (
    <div>
      <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default EmbeddedForm;
