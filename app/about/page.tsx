"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Clock, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    value: "1000+",
    label: "Graduates",
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: "50+",
    label: "Expert Trainers",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "100%",
    label: "Job Assistance",
  },
]

const features = [
  {
    title: "Expert Faculty",
    description: "Learn from industry professionals with years of experience in fashion design.",
  },
  {
    title: "Practical Training",
    description: "Hands-on experience with latest equipment and techniques in fashion designing.",
  },
  {
    title: "Flexible Timings",
    description: "Choose from multiple batches to suit your schedule and learning pace.",
  },
  {
    title: "Industry Connect",
    description: "Regular workshops and seminars with fashion industry experts.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">About The Thai Institute</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming fashion aspirants into industry professionals through comprehensive training and hands-on
            experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center my-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Journey</h2>
              <p className="text-muted-foreground">
                The Thai Institute of Fashion Designing has been at the forefront of fashion education since its
                inception. Our commitment to excellence and innovation in fashion design education has made us one of
                the leading institutes in Bangalore.
              </p>
              <p className="text-muted-foreground">
                We pride ourselves on providing comprehensive fashion design education that combines traditional
                techniques with modern innovation. Our courses are designed to meet industry standards while nurturing
                individual creativity.
              </p>
              <Button asChild size="lg">
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Fashion Design Institute"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="my-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-primary text-white rounded-lg p-12 my-16"
        >
          <h2 className="text-3xl font-bold mb-4">Start Your Fashion Journey Today</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join us at The Thai Institute and transform your passion for fashion into a successful career.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

