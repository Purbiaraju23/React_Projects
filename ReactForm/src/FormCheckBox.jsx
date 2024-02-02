import React from 'react'

function FormCheckBox({label,checkItems}) {
  return (
    <div className="items">
      <label >{label}</label>

      <div className="checkbox-group">
        {checkItems}
      </div>
    </div>
  )
}

export default FormCheckBox