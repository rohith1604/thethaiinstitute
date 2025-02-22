"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Sample gallery items - replace with actual images
const galleryItems = [
  {
    title: "Fashion Show 2023",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Student Workshop",
    category: "Workshops",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Design Collection",
    category: "Student Work",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Pattern Making Class",
    category: "Classes",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Graduation Day",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Fashion Exhibition",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Design Studio",
    category: "Facilities",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Student Projects",
    category: "Student Work",
    image: "/placeholder.svg?height=400&width=600",
  },
  // Add more items as needed
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(galleryItems.map((item) => item.category))]
  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Our Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of student work, events, and facilities at The Thai Institute.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category ? "bg-primary text-white" : "bg-muted hover:bg-primary/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`gallery-item-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl aspect-video">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery Image" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

