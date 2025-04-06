import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'


const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color} // Set the initial color from the state
        onChange={(color) => {
          state.color = color.hex; // Update the state with the selected color
        }}
        disableAlpha // Disable alpha channel for simplicity
        presetColors={[
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",  
          "#4caf50",
          "#8bc34a",
          "#cddc39",
          "#ffeb3b",  
          "#ffc107",
          "#ff9800",  
          "#ff5722",  
          "#795548",
          "#607d8b",
          
        ]} // You can add preset colors if needed
      />
    </div>
  )
}

export default ColorPicker
