"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Animation variants for the navbar
const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Variants for individual nav items
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// Variants for mobile menu
const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/courses",
      label: "Courses",
    },
    {
      href: "/gallery",
      label: "Gallery",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 hover:bg-black/10 hover:backdrop-blur-md"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white transition-all duration-300 hover:text-primary hover:scale-105">
              THETHAIINSTITUTE
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route, index) => (
              <motion.div
                key={route.href}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:border-b-2 hover:border-primary px-1 py-2",
                    pathname === route.href ? "text-primary border-b-2 border-primary" : "text-white"
                  )}
                >
                  {route.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: routes.length * 0.1, duration: 0.4 }}
            >
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/80 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
            </motion.div>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden text-white hover:text-primary transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/90 backdrop-blur-md"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <nav className="flex flex-col space-y-4 p-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary hover:pl-2 px-4 py-2",
                  pathname === route.href ? "text-primary" : "text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/80 hover:scale-105 transition-all duration-300 mx-4"
            >
              <Link href="/apply" onClick={() => setIsOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.div>
  );
}