"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFlip, Navigation, Pagination } from "swiper/modules"
import { Heart, ArrowRight, Camera } from "lucide-react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function PhotoGallery({ onComplete }) {
  const photos = [
    "/placeholder.svg?height=500&width=400",
    "/placeholder.svg?height=500&width=400",
    "/placeholder.svg?height=500&width=400",
    "/placeholder.svg?height=500&width=400",
    "/placeholder.svg?height=500&width=400",
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-6 md:px-6 md:py-8"
    >
      <div className="w-full max-w-4xl flex flex-col justify-center space-y-8 md:space-y-12">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4 md:space-y-6"
        >
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Camera className="w-12 h-12 md:w-16 md:h-16 text-pink-400 mx-auto drop-shadow-lg" />
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              📸 Our Beautiful Journey 📸
            </h2>
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-pink-200 text-lg md:text-xl"
            >
              Every moment with you is a treasure ✨
            </motion.p>
          </div>
        </motion.div>

        <div className="w-full max-w-sm md:max-w-md mx-auto">
          <Swiper
            effect="flip"
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectFlip, Navigation, Pagination]}
            className="h-80 md:h-96"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-3 md:p-4 border border-white/20 shadow-2xl h-full relative overflow-hidden group"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={`Memory ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Floating hearts on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -40],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                          className="absolute"
                          style={{
                            left: `${20 + i * 15}%`,
                            bottom: "20%",
                          }}
                        >
                          <Heart className="w-3 h-3 md:w-4 md:h-4 text-pink-300 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2 md:gap-3">
              <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              One Final Surprise
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
