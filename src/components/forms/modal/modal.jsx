import React, { useState } from 'react'
import styles from "./modal.module.scss"

export default function RModal({ children}) {

   

    
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}
