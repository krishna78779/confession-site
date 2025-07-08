"use client"

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react"

const BackgroundMusic = forwardRef((_, ref) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6 // Default volume
      audioRef.current.play().catch(() => {
        // autoplay failed
      })
    }
  }, [])

  useImperativeHandle(ref, () => ({
    pause: () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    },
    resume: () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          // autoplay issue
        })
      }
    },
  }))


  return (
    <audio ref={audioRef} loop className="hidden">
      <source src="/audio/bg.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
})

export default BackgroundMusic
