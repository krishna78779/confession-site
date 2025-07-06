"use client"

import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8
      audioRef.current.play().catch(() => {
        // Auto-play failed, will try again on user interaction
      })
    }
  }, [])

  return (
    <audio ref={audioRef} loop className="hidden">
      <source src="/bg.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}
