import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  
  return (
    <button  className={props.config.classname} data-testid={config.key}  onClick={() => selectNextBackground({background: background})}>
      {props.config.label}
    </button>
    
  )
 
}
export default ColourSelector;
