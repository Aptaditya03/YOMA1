"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Play, ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Industrial & Automotive Solutions",
      description:
        "We’ve worked with JCB, Tata Motors, and Preet Brothers to create cutting-edge 3D training, assembly, and troubleshooting tools.Pioneering the integration of 3D visualization with web development, we deliver interactive platforms that boost efficiency and simplify complex systems",
      image: "https://i.ibb.co/MDydxpSF/IMG-20250605-WA0008.jpg",
      tags: ["3D Visualization", "WebGL", "E-commerce"],
      featured: true,
    },
    {
      title: "E-commerce Product Visualization",
      description: "We create high-quality 3D renders and animations optimized for platforms like Flipkart, Amazon, and Croma.From lifestyle visuals to product explainers, our work boosts engagement, drives conversions, and enhances brand presence.",
      image: "https://i.ibb.co/B2YvvkRn/IMG-20250605-WA0010.jpg",
      tags: ["Virtual Reality", "3D Modeling", "Interactive"],
      featured: true,
      video:"",
        
    },
    
  ]

  const technologies = [
    { name: "3D Modeling", description: "High-quality 3D models optimized for web and mobile" },
    { name: "WebGL", description: "Real-time 3D graphics in web browsers" },
    { name: "Virtual Reality", description: "Immersive VR experiences for various platforms" },
    { name: "Augmented Reality", description: "AR solutions for mobile and web applications" },
    { name: "3D Animation", description: "Smooth, engaging animations that tell your story" },
    { name: "Interactive Design", description: "User-friendly interfaces for 3D experiences" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of innovative 3D solutions that have transformed businesses and elevated customer
              experiences across various industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our most impactful work that demonstrates the power of 3D technology
            </p>
          </motion.div>

          <div className="space-y-20">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="text-pink-500 font-semibold mb-2">{project.category}</div>
                    <h3 className="text-3xl font-light text-gray-800 mb-4">{project.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-pink-100 text-pink-600 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 text-sm font-semibold tracking-wider hover:shadow-lg transition-shadow flex items-center"
                      >
                        VIEW PROJECT
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-gray-300 text-gray-700 px-6 py-3 text-sm font-semibold tracking-wider hover:bg-gray-50 transition-colors flex items-center"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        DEMO
                      </motion.button>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative group ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                      {project.video ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                          poster={project.image}
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* All Projects Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-800 mb-6">More Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover more of our innovative solutions across different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <motion.div whileHover={{ scale: 1.05 }} className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>

                  <div className="p-6">
                    <div className="text-pink-500 font-semibold text-sm mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="text-pink-500 font-medium hover:text-pink-600 flex items-center group">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-800 mb-6">Our Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional 3D experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl border border-gray-200 hover:border-pink-200 hover:shadow-lg transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
                >
                  {index % 3 === 0 && "🚀"}
                  {index % 3 === 1 && "💡"}
                  {index % 3 === 2 && "✨"}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-500 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">Ready to start your project?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Let's discuss how we can bring your vision to life with cutting-edge 3D technology.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-8 py-4 text-sm font-semibold tracking-wider hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET STARTED TODAY
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
