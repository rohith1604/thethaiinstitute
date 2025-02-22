import { MapPin } from "lucide-react";

export default function Home() {
  // ...
  return (
    <main className="min-h-screen">
      {/* ... */}
      {/* Contact */}
      <section id="contact" className="py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-sm">
                #648, 1st Floor, 17th &apos;C&apos; Cross, CMH Road, Indira Nagar, Bangalore-560038
                <br />
                (Near Indira Nagar Metro Station - Just 5 Minutes Walkable)
              </p>
            </div>
            <div className="text-center">
              <div style={{ width: "100%", height: "400px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.178314492171!2d77.62221741478222!3d12.96482378522498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145c7991e5b7%3A0x40f5f49d69b7c943!2sIndiranagar%20Metro%20Station!5e0!3m2!1sen!2sin!4v1676123972252!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* ... */}
          </div>
        </div>
      </section>
    </main>
  )
} 