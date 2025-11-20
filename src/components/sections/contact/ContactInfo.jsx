import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-varsal-darkblue mb-6">Contact Information</h2>
      
      <div className="space-y-8">
        <div className="flex">
          <MapPin className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
            <p className="text-gray-600">
            901, Kamdhenu, Plot No. 12, Sector 30,<br />
            Sanpada, Navi Mumbai <br />
            Maharashtra, India
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Phone className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">
              Main Office: +91 93513 26329<br />
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Mail className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">
              General Inquiries: info@varsalhealthcare.com<br />
              Support: support@varsalhealthcare.com<br />
              Careers: careers@varsalhealthcare.com
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Clock className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Hours of Operation</h3>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 5:00 PM IST<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

