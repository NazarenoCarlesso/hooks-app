// import { useState } from 'react'

import { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volví a dibujar :c')

  return (
    <button
      onClick={() => increment(5)}
    >
      Incrementar
    </button>
  )
})
