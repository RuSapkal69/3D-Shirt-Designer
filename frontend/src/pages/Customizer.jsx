import React, { useState, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { AnimatePresence, motion } from 'framer-motion'

import config from '../config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasImage, reader } from '../config/helpers';
import { Editor, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';


const Customizer = () => {
  return (
    <div>
      
    </div>
  )
}

export default Customizer
