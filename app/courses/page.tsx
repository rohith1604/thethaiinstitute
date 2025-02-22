import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    title: "Preparatory Course",
    duration: "6 Weeks",
    description:
      "Perfect for beginners. Learn the basics of fashion design including body measurements, basic patterns, and essential techniques.",
    image: "/placeholder.svg?height=200&width=300",
    link: "preparatory",
    highlights: ["Body Measurements", "Basic Patterns", "Essential Techniques", "Fundamental Stitching"],
  },
  {
    title: "Intermediate Course",
    duration: "Flexible",
    description:
      "Advance your skills with complex patterns and designs. Learn various styles of dresses, tops, and ethnic wear.",
    image: "/placeholder.svg?height=200&width=300",
    link: "intermediate",
    highlights: ["Advanced Patterns", "Multiple Garment Types", "Detailed Techniques", "Style Variations"],
  },
  {
    title: "Crash Course",
    duration: "2 Weeks",
    description: "Quick, intensive learning covering essential skills and basic garment construction techniques.",
    image: "/placeholder.svg?height=200&width=300",
    link: "crash",
    highlights: ["Quick Learning", "Essential Skills", "Basic Patterns", "Practical Approach"],
  },
  {
    title: "Advance Course",
    duration: "Flexible",
    description: "Master high-end fashion design including bridal wear, complex patterns, and professional techniques.",
    image: "/placeholder.svg?height=200&width=300",
    link: "advance",
    highlights: ["Bridal Wear", "Complex Patterns", "Professional Techniques", "Advanced Styling"],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional fashion design courses. Each course is crafted to help you develop
            your skills and achieve your fashion design goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={600}
                height={300}
                className="w-full object-cover h-48"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{course.title}</h2>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Course Highlights:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <Link href={`/courses/${course.link}`}>Learn More</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

