import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Add this CSS for custom animations (you can put it in a global CSS file like `globals.css`)


export default function Home() {
  const courses = [
    {
      title: "Preparatory Course",
      duration: "6 Weeks",
      description: "Perfect for beginners. Learn the basics of fashion design.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Intermediate Course",
      duration: "Flexible",
      description: "Advance your skills with complex patterns and designs.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Crash Course",
      duration: "2 Weeks",
      description: "Quick, intensive learning for essential skills.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Advance Course",
      duration: "Flexible",
      description: "Master high-end fashion and bridal wear design.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Animation */}
      <section className="relative h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/mainimage.jpg?height=500&width=1000"
          alt="Fashion Design"
          width={1000}
          height={500}
          className="object-cover w-full h-full  transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <div className="overflow-hidden w-full">
            <h1 className="animate-slideInLeft text-4xl md:text-6xl font-bold whitespace-nowrap text-center">
              New Thai Institute of Fashion Designing
            </h1>
          </div>
          <p className="mt-4 text-xl md:text-2xl text-center text-secondary animate-fadeInUp animation-delay-200">
            Come with Passion, We make your Dream Come True
          </p>
          <div className="mt-8 space-x-4 animate-fadeInUp animation-delay-400">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
              <Link href="#courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 transition-transform hover:scale-105">
              <Link href="apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction with Subtle Animation */}
      <section className="py-16 bg-accent">
        <div className="container">
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto animate-fadeInUp">
            Unleash your creativity and turn your fashion dreams into reality with our expert-led courses at the New
            Thai Institute of Fashion Designing.
          </p>
        </div>
      </section>

      {/* Batch Timings with Card Animation */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fadeInUp">Batch Timings</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Card className="flex-1 animate-zoomIn">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Clock className="w-8 h-8 mx-auto text-primary transition-transform hover:rotate-12" />
                  <h3 className="font-semibold">Batch 1</h3>
                  <p className="text-lg">10:30 AM - 1:00 PM</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 animate-zoomIn animation-delay-200">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Clock className="w-8 h-8 mx-auto text-primary transition-transform hover:rotate-12" />
                  <h3 className="font-semibold">Batch 2</h3>
                  <p className="text-lg">2:30 PM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses with Card Hover Effects and Animation */}
      <section id="courses" className="py-16 bg-accent">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fadeInUp">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-zoomIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-48 transition-transform duration-500 hover:scale-110"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Duration: {course.duration}</p>
                  <p className="text-sm mb-4">{course.description}</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                    <Link href="/courses">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Fade-in Animation */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fadeInUp">What Our Students Say</h2>
          <div className="aspect-video max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xq4q1hjNclo"
              title="Student Testimonials"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}