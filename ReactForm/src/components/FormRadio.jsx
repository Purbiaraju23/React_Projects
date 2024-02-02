import React from 'react'

function FormRadio({mainLabel,radioItems}) {
  return (
    <div className="items">
          <label >{mainLabel}:</label>
          <div className="radio-group">
            {radioItems}
          </div>
        </div>
  )
}

export default FormRadio