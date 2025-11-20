import gynoimg from "@/Assets/Product/gyno.jpeg";
import orthoimg from "@/Assets/Product/orthopedic.jpeg";
import surimg from "@/Assets/Product/surgical.jpeg";

export const products = [
  {
    id: 1,
    name: "Gynecology",
    category: "Diagnostic Equipment",
    description: "Advanced diagnostic tool for comprehensive health monitoring with real-time data analysis and cloud integration.",
    benefits: [
      "Accurate vital sign monitoring",
      "Early disease detection",
      "User-friendly interface",
      "Remote monitoring capabilities"
    ],
    image: gynoimg,
    medicines: [
      { name: "Irofes-XT", link: "https://www.1mg.com/otc/irofes-xt-tablet-otc962108" },
      { name: "Ehuca-D3", link: "https://www.1mg.com/drugs/ehuca-d3-tablet-965125" },
      { name: "Efflux-D", link: "https://www.1mg.com/drugs/efflux-d-capsule-pr-964391" },
      { name: "Efflux 40", link: "https://www.1mg.com/drugs/efflux-40-tablet-962103" },
      { name: "Lycosal", link: "https://www.1mg.com/otc/lycosal-tablet-otc962436" },
      { name: "Itravar", link: "https://www.1mg.com/marketer/varsal-healthcare-pvt-ltd-90027?srsltid=AfmBOoqxUJd9tZk0RJNaojjBPga5CFLX-NId6I6BGzfTNlOQXPzhZwF8" },
      { name: "Q-Jest", link: "https://www.1mg.com/marketer/varsal-healthcare-pvt-ltd-90027?srsltid=AfmBOoqxUJd9tZk0RJNaojjBPga5CFLX-NId6I6BGzfTNlOQXPzhZwF8" },
    ]
  },
  {
    id: 2,
    name: "Orthopedic",
    category: "Patient Management",
    description: "Comprehensive patient management system for healthcare facilities, streamlining administrative processes and enhancing care delivery.",
    benefits: [
      "Efficient patient record management",
      "Appointment scheduling",
      "Medication tracking",
      "Seamless integration with existing systems"
    ],
    image: orthoimg,
    medicines: [
      { name: "Ehuca-D3", link: "https://www.1mg.com/drugs/ehuca-d3-tablet-965125" },
      { name: "Efflux-D", link: "https://www.1mg.com/drugs/efflux-d-capsule-pr-964391" },
      { name: "Varace-SP", link: "https://www.1mg.com/drugs/varace-sp-tablet-962125" },
      { name: "Varace-P", link: "https://www.1mg.com/drugs/varace-p-tablet-962122" },
      { name: "Varfast-OD", link: "https://www.1mg.com/drugs/varfast-od-tablet-962132" },
      { name: "Vxrol", link: "https://www.1mg.com/drugs/vxrol-gel-962138" },
    ]
  },
  {
    id: 3,
    name: "NeuroCare Solutions",
    category: "Therapeutic Devices",
    description: "Advanced neurological care devices designed to aid in rehabilitation and management of neurological conditions.",
    benefits: [
      "Personalized therapy programs",
      "Progress tracking",
      "Non-invasive treatment options",
      "Clinically proven results"
    ],
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=800",
    medicines: [
      { name: "Varfast-OD", link: "https://www.1mg.com/drugs/varfast-od-tablet-962132" },
      { name: "Efflux-D", link: "https://www.1mg.com/drugs/efflux-d-capsule-pr-964391" },
    ]
  },
  {
    id: 4,
    name: "Surgical",
    category: "Telehealth",
    description: "Secure telehealth platform connecting patients with healthcare providers for virtual consultations and remote care management.",
    benefits: [
      "HIPAA-compliant video conferencing",
      "Electronic prescriptions",
      "Integrated health records",
      "Mobile accessibility"
    ],
    image: surimg,
    medicines: [
      { name: "Irofes-XT", link: "https://www.1mg.com/otc/irofes-xt-tablet-otc962108" },
      { name: "Ziaprex 100", link: "https://www.1mg.com/drugs/ziaprex-100-tablet-964127" },
      { name: "Ziaprex-O", link: "https://www.1mg.com/drugs/ziaprex-o-tablet-964128" },
    ]
  },
];

