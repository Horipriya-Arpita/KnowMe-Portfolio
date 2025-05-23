'use client'
import { Button } from "@mui/material";
import { Mail } from "lucide-react";

export default function ContactSection(){
    return (
        <>
        <section id="contact" className="relative container mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">{`Let's`} Work Together</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              {`I'm`} always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out using the contact form or through my social media profiles.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-500" />
                </div>
                <span>horipriya288@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 10.999c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z" />
                  </svg>
                </div>
                <span>Dhaka, Bangladesh </span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              ></textarea>
            </div>
            <Button className="w-full bg-navy-900 border border-purple-500/30 hover:bg-navy-800 text-white py-6">
              Send Message
            </Button>
          </form>
        </div>
      </section>
        
        </>
    )
}