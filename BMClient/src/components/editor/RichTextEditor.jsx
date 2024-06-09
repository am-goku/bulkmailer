import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import PropTypes from 'prop-types';


const RichTextEditor = ({ onChange, currentValue }) => {
  const [content, setContent] = useState(currentValue || '');

  const handleChange = (value) => {
    setContent(value);
    onChange(value); // Pass the content to the parent component
  };

  return (
    <ReactQuill value={content} className='h-[90%] w-full absolute' onChange={handleChange} />
  );
};

RichTextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.string
};

export default RichTextEditor;
