import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Mail className="w-6 h-6 text-blue-500 mr-4" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">nischalreddy.1236@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <Phone className="w-6 h-6 text-blue-500 mr-4" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">+91 9701094401</p>
        </div>
      </div>
      <div className="flex items-center">
        <MapPin className="w-6 h-6 text-blue-500 mr-4" />
        <div>
          <h3 className="font-semibold">Location</h3>
          <p className="text-gray-600">Khammam, Telangana</p>
        </div>
      </div>
    </div>
  );
}