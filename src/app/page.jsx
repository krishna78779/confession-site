"use client"

import { useState } from "react"
import { AnimatePresence } from "motion/react"
import Loader from "@/components/Loader"
import SecretCode from "@/components/SecretCode"
import HeartReveal from "@/components/HeartReveal"
import ConfessionIntro from "@/components/ConfessionIntro"
import SpecialMessage from "@/components/SpecialMessage"
import PhotoGallery from "@/components/PhotoGallery"
import VoiceNote from "@/components/VoiceNote"
import FloatingElements from "@/components/FloatingElements"
import BackgroundMusic from "@/components/BackgroundMusic"

export default function ConfessionSite() {
  const [currentScreen, setCurrentScreen] = useState("loader")
  const [musicStarted, setMusicStarted] = useState(false)

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen)
    if (screen === "heartReveal" && !musicStarted) {
      setMusicStarted(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950/35 via-black/40 to-fuchsia-950/35 relative overflow-hidden">

      <div className="fixed inset-0 z-0 blur-xl opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 25% 30%, rgba(236,72,153,0.7), transparent 40%)",
      }} />

      <div className="fixed inset-0 z-0 blur-xl opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 75% 75%, rgba(99,102,241,0.7), transparent 40%)",
      }} />

      <div className="fixed inset-0 z-0 blur-2xl opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(228,193,255,0.6), transparent 40%)",
      }} />


      {/* Cute floating elements */}
      <FloatingElements />

      {/* {musicStarted && <BackgroundMusic />} */}

      <AnimatePresence mode="wait">
        {currentScreen === "loader" && <Loader key="loader" onComplete={() => handleScreenChange("secretCode")} />}
        {currentScreen === "secretCode" && (
          <SecretCode key="secretCode" onUnlock={() => handleScreenChange("heartReveal")} />
        )}
        {currentScreen === "heartReveal" && (
          <HeartReveal key="heartReveal" onComplete={() => handleScreenChange("confessionIntro")} />
        )}
        {currentScreen === "confessionIntro" && (
          <ConfessionIntro key="confessionIntro" onComplete={() => handleScreenChange("message")} />
        )}
        {currentScreen === "message" && (
          <SpecialMessage key="message" onComplete={() => handleScreenChange("photos")} />
        )}
        {currentScreen === "photos" && <PhotoGallery key="photos" onComplete={() => handleScreenChange("voiceNote")} />}
        {currentScreen === "voiceNote" && <VoiceNote key="voiceNote" />}
      </AnimatePresence>
    </div>
  )
}
