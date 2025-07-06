"use client"

import { useState, useRef } from "react"
import { motion } from "motion/react"
import { Play, Pause, Heart, Volume2, Mic, Sparkles } from "lucide-react"

export default function VoiceNote() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-6 md:px-6 md:py-8 overflow-y-auto"
    >
      <div className="w-full max-w-lg">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          {/* Magical background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl"></div>

          <div className="relative z-10 space-y-6 md:space-y-8">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Mic className="w-16 h-16 md:w-20 md:h-20 text-pink-400 mx-auto drop-shadow-lg" />

              {/* Subtle sparkles around mic */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + 30 * Math.cos((i * 90 * Math.PI) / 180)}%`,
                    top: `${50 + 30 * Math.sin((i * 90 * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </motion.div>
              ))}
            </motion.div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                🎵 My Voice, My Heart 🎵
              </h2>
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-pink-200 text-lg md:text-xl"
              >
                I recorded something special, just for you 💕
              </motion.p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isPlaying ? (
                  <Pause className="w-10 h-10 md:w-12 md:h-12" />
                ) : (
                  <Play className="w-10 h-10 md:w-12 md:h-12 ml-1" />
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Pulsing rings when playing */}
              {isPlaying && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 border-4 border-pink-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    className="absolute inset-0 border-4 border-purple-400 rounded-full"
                  />
                </>
              )}
            </motion.button>

            <audio ref={audioRef} onEnded={() => setIsPlaying(false)} className="hidden">
              <source src="/voice.m4a" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <motion.div
              animate={{ opacity: isPlaying ? [0.5, 1, 0.5] : 0.5 }}
              transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
              className="flex items-center justify-center gap-2 md:gap-3 text-white/60"
            >
              <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-base md:text-lg">
                {isPlaying ? "Playing my heart out..." : "Tap to hear my voice"}
              </span>
            </motion.div>

            <div className="pt-6 md:pt-8 border-t border-white/10 space-y-4 md:space-y-6">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-400 fill-current mx-auto" />
              </motion.div>

              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Thank you for being the most incredible person in my life. You make every day feel like magic, every
                moment feel like a dream come true. I love you beyond words, beyond time, beyond everything. 💕✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
