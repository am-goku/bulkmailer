import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import PropTypes from 'prop-types';


const RichTextEditor = ({ onChange, currentValue, theme, className, id }) => {
  const [content, setContent] = useState(currentValue || '');

  const handleChange = (value) => {
    setContent(value);
    onChange(value); // Pass the content to the parent component
  };

  return (
    <ReactQuill theme={theme} value={content} className={className} onChange={handleChange} id={id} />
  );
};

RichTextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.any,
  theme: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default RichTextEditor;
