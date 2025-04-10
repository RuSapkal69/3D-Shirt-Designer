import React from 'react'

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
        <input 
            id='file-upload'
            type='file'
            accept='image/*'
            value={file}
            onChange={(e) => setFile(e.target.value)}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
            Upload File
        </label>
        <button 
            className='filepicker-btn'
            type='button'
            onClick={() => readFile('file')}
        >
            Upload
        </button>
      
    </div>
  )
}

export default FilePicker
