import { FacebookIcon, Instagram, Twitter, YoutubeIcon } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">THE THAI INSTITUTE</h3>
            <p className="text-sm text-gray-400">
              Transform your passion for fashion into a successful career with our expert-led courses.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-gray-400 hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-400 hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <address className="text-sm text-gray-400 not-italic">
              #648, 1st Floor, 17th &apos;C&apos; Cross,
              <br />
              CMH Road, Indira Nagar,
              <br />
              Bangalore-560038
            </address>
            <div className="text-sm text-gray-400">
              <p>Phone: 8147506181 / 8658144225</p>
              <p>Email: admin@krispcons.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <YoutubeIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} THE THAI INSTITUTE. All rights reserved.</p>
            <p className="text-sm text-gray-400">
              Developed by{" "}
              <Link href="https://krispcons.com" className="hover:text-primary">
                krispcons.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

