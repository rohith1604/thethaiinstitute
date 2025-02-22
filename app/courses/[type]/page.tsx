import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";

// Define the structure of a section
interface CourseSection {
  title: string;
  items: string[];
}

// Define the structure of a course
interface Course {
  title: string;
  duration: string;
  sections: CourseSection[];
}

// Define the valid course types as a union type
type CourseType = "crash" | "intermediate" | "advance" | "preparatory";

// Define the course data with explicit typing
const courseData: Record<CourseType, Course> = {
  crash: {
    title: "Crash Course",
    duration: "2 Weeks",
    sections: [
      { title: "Basics", items: ["Body Measurement"] },
      { title: "Skirts & Dresses", items: ["Straight Skirt", "Indian Kurta", "Straight Cut Western Dress"] },
      { title: "Bottom Wear", items: ["Salwar Bottom", "Chudi Bottom"] },
      { title: "Necklines", items: ["Round Neck", "Boat Neck"] },
      { title: "Sleeves", items: ["Standard Sleeves", "3/4th Sleeves", "Cap Sleeves"] },
      { title: "Embellishments", items: ["Bow", "Flower Making"] },
    ],
  },
  intermediate: {
    title: "Intermediate Course",
    duration: "Flexible",
    sections: [
      { title: "Skirts", items: ["Straight Skirt", "A Line Skirt", "Circular Skirt", "Wrap Around Skirt"] },
      {
        title: "Dresses",
        items: [
          "Indian Kurtas",
          "Straight Cut Dress",
          "True Waist Cut Dress",
          "Indo-Western Chudidars",
          "Princess Cut Dress",
          "Gather Dress",
          "Panel Dress",
          "Sleeveless Dress",
        ],
      },
      { title: "Bottom Wear", items: ["Chudi Bottom", "Salwar Bottom", "Patiala Bottom", "Palazzo Bottom", "Palazzo with Panels"] },
      {
        title: "Western Dresses",
        items: [
          "Tube Dress",
          "Tube Dress with Panel",
          "Tube Dress with Underbust Cut",
          "Alter Neck Dress",
          "Cross Over Dress",
          "Empire-Cut Dress",
          "Fish-Cut Dress",
        ],
      },
      { title: "Blouses", items: ["Indian Blouse", "Indo-Western Blouse", "Princess Cut Blouse", "Katori Cut Blouse"] },
      {
        title: "Sleeves",
        items: ["Full Sleeves", "3/4th Sleeves", "Puff Sleeves", "Bell Sleeves", "Cut Away Sleeves", "Petal Sleeves"],
      },
      {
        title: "Tops",
        items: ["Ladies Front Open Shirt", "Chinese Neck Band Shirt", "Normal Collar Shirt", "Shrug", "Pin-tuck Top"],
      },
      { title: "Gowns", items: ["Fish Cut Long Gown", "Concealed Zip Fixing", "Arm Whole Adjustment"] },
      { title: "Pleats", items: ["Box Pleat", "Knife Pleat", "Inverted Pleat"] },
    ],
  },
  advance: {
    title: "Advance Course",
    duration: "Flexible",
    sections: [
      { title: "Skirts", items: ["Straight Skirt", "A Line Skirt", "Circular Skirt", "Fish Tail Skirt", "Wrap Around Skirt"] },
      {
        title: "Dresses",
        items: [
          "Indian Kurtas",
          "Straight Cut Dress",
          "True Waist Cut Dress",
          "Indo-Western Chudidars",
          "Princess Cut Dress",
          "Gather Dress",
          "Panel Dress",
          "Sleeveless Dress",
        ],
      },
      { title: "Bottom Wear", items: ["Chudi Bottom", "Salwar Bottom", "Patiala Bottom", "Palazzo Bottom", "Palazzo Bottom with Panel"] },
      {
        title: "Western Dresses",
        items: [
          "Tube Dress",
          "Tube Dress with Panel",
          "Tube Dress with Underbust Cut",
          "Alter Neck Dress",
          "Cross Over Dress",
          "Empire-Cut Dress",
          "Fish-Cut Dress",
          "Corset",
          "Corset with Boning",
          "Corset with bra-cut",
          "Off shoulder",
          "One shoulder",
          "Cold shoulder Dress",
          "Box Pleat Dress",
          "Knife Pleat Dress",
          "Inverted Pleat Dress",
        ],
      },
      {
        title: "Sleeves",
        items: ["Full Sleeves", "3/4th Sleeves", "Puff Sleeves", "Bell Sleeves", "Cut Away Sleeves", "Petal Sleeves", "Cold Sleeves"],
      },
      {
        title: "Tops",
        items: ["Ladies Front Open Shirt", "Chinese Neck Band Shirt", "Normal Collar Shirt", "Shrug", "Pin-tuck Top", "Peplum Top"],
      },
      {
        title: "Gowns",
        items: ["Fish Cut Long Gown", "Net Can Can Skirt", "Standard Bridal Gown", "Bridal Gown with Train", "Bridal Gown with Vail (Long/Short Vail)"],
      },
      { title: "Blouses", items: ["Indian Blouse", "Indo-Western Blouse", "Princess Cut Blouse"] },
    ],
  },
  preparatory: {
    title: "Preparatory Course",
    duration: "6 Weeks",
    sections: [
      { title: "Body Measurement", items: ["Complete Body Measurement Techniques"] },
      { title: "Skirts", items: ["Straight Skirt", "A Line Skirt", "Salwar Bottom", "Chudi Bottom"] },
      { title: "Dresses", items: ["Straight Cut Dress", "Pant Top", "Sleeveless Dress", "Patch Work Dress / Top"] },
      { title: "Necklines", items: ["Square Neck", "V-Neck", "Round Neck", "Sweet-Heart Neck", "Boat Neck"] },
      { title: "Zip Fixing", items: ["Indian Zip Fixing", "Concealed Zip Fixing"] },
      { title: "Sleeves", items: ["Short Sleeve", "Cap Sleeve", "3/4th Sleeve", "Puff Sleeve"] },
      { title: "Blouses", items: ["Indian Blouse", "Katori Blouse"] },
      { title: "Western Dress", items: ["A-Line Long Gown"] },
    ],
  },
};
// Define the props type explicitly
interface CoursePageProps {
  params: Promise<{ type: CourseType }>;
}

// Page component
export default async function CoursePage({ params }: CoursePageProps) {
  const paramsObj = await params;
  const courseKey = paramsObj.type;
  const course = courseData[courseKey];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                <span>Certificate Course</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.sections.map((section, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-muted-foreground">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}