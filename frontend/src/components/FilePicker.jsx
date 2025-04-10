import React from 'react'

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex flex-1 flex-col'>
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
        <p className='mt-2 text-gray-500 text-sm truncate'>
          {file === '' ? 'No file selected' : file}
        </p>
      </div>
    </div>
  )
}

export default FilePicker
