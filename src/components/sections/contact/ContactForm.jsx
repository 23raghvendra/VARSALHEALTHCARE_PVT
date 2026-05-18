'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div id="contact-form" className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-varsal-darkblue mb-3">Send Us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      
      {formSubmitted && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3 animate-fade-in">
          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-800">Message sent successfully!</p>
            <p className="text-sm text-green-700 mt-1">
              Thank you for reaching out. We'll respond to your inquiry shortly.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              required 
              value={formData.name}
              onChange={handleInputChange}
              className="h-12 border-gray-300 focus:border-varsal-lightblue focus:ring-varsal-lightblue"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
              required 
              value={formData.email}
              onChange={handleInputChange}
              className="h-12 border-gray-300 focus:border-varsal-lightblue focus:ring-varsal-lightblue"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-700 font-medium">
            Subject <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="subject" 
            name="subject" 
            placeholder="How can we help you?" 
            required 
            value={formData.subject}
            onChange={handleInputChange}
            className="h-12 border-gray-300 focus:border-varsal-lightblue focus:ring-varsal-lightblue"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Tell us more about your inquiry..." 
            required 
            className="min-h-[150px] border-gray-300 focus:border-varsal-lightblue focus:ring-varsal-lightblue resize-none"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 bg-varsal-darkblue hover:bg-varsal-blue text-white font-semibold text-lg group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

