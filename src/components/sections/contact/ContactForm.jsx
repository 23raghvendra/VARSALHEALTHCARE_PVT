'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div id="contact-form">
      <h2 className="text-2xl font-bold text-varsal-darkblue mb-6">Send Us a Message</h2>
      
      {formSubmitted ? (
        <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex items-center">
          <CheckCircle className="text-green-500 mr-4" size={24} />
          <div>
            <h3 className="font-semibold text-green-800 mb-1">Thank You!</h3>
            <p className="text-green-600">Your message has been sent successfully. We&apos;ll get back to you as soon as possible.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Enter your email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              name="subject" 
              placeholder="How can we help you?" 
              required 
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Please provide details about your inquiry..." 
              required 
              className="min-h-[120px]"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-800 hover:bg-blue-700"
          >
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}

