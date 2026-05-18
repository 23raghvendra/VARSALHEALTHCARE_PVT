import gynoimg from "@/Assets/Product/gyno.jpeg";
import orthoimg from "@/Assets/Product/orthopedic.jpeg";
import surimg from "@/Assets/Product/surgical.jpeg";
import pediaimg from "@/Assets/Product/ZUMOCEF-CV.jpg";
import cpimg from "@/Assets/Product/EFFLUX-D.jpg";
import opthoimg from "@/Assets/Product/VAR-CMC.jpg";
import entimg from "@/Assets/Product/ZUMOCEF.jpg";
import tbChestimg from "@/Assets/Product/VARMONT-L.jpg";
import gpimg from "@/Assets/Product/ZIAPREX.jpg";

const searchLink = (medicineName) =>
  `https://www.1mg.com/search/all?name=${encodeURIComponent(medicineName)}`;

const makeMedicines = (names) =>
  names.map((name) => ({
    name,
    link: searchLink(name),
  }));

export const products = [
  {
    id: 1,
    name: "Ortho",
    category: "Orthopedics",
    description: "Orthopedic-focused product range supporting pain management, mobility, and recovery in musculoskeletal care.",
    benefits: [
      "Supports joint and muscle pain management",
      "Improves post-injury and post-op recovery support",
      "Suitable for routine orthopedic prescriptions",
      "Aligned with clinician-first treatment workflows"
    ],
    image: orthoimg,
    medicines: makeMedicines([
      "EHUCA-Nano/60k",
      "EHUCA-D3",
      "VARFAST-OD",
      "Varfast LC",
      "VARCORT-6",
      "VXROL GEL",
      "Varace-P/SP",
      "EFFLUX-D",
    ]),
  },
  {
    id: 2,
    name: "Gyne",
    category: "Gynecology",
    description: "Women-focused formulations designed for nutritional support, hormonal balance, and gynecological care continuity.",
    benefits: [
      "Supports everyday gyne practice needs",
      "Balanced portfolio for varied patient profiles",
      "Helps improve treatment adherence",
      "Reliable options for OPD prescribing"
    ],
    image: gynoimg,
    medicines: makeMedicines([
      "Q-Jest",
      "EHUCA-Nano/60k",
      "EHUCA-D3",
      "Varpol-G2",
      "IROFES-XT",
      "Ze-21Sy/Tab",
      "ZIAPREX-O",
      "OFLAVAR-O",
      "EFFLUX-D",
    ]),
  },
  {
    id: 3,
    name: "Pedia",
    category: "Pediatrics",
    description: "Pediatric-oriented products developed to support age-appropriate care and safe clinical decision making.",
    benefits: [
      "Supports common pediatric therapeutic needs",
      "Useful range for child-focused consultations",
      "Designed for practical prescribing",
      "Helps maintain continuity in pediatric care"
    ],
    image: pediaimg,
    medicines: makeMedicines([
      "Varpol-G2",
      "EHUCA-Nano",
      "Ze-21sy",
      "Zumocef-100/200",
      "ZIAPREX-100/200",
    ]),
  },
  {
    id: 4,
    name: "CP",
    category: "General Practice",
    description: "Comprehensive multi-therapy portfolio for broad outpatient requirements across common day-to-day conditions.",
    benefits: [
      "Wide spectrum support for mixed case loads",
      "Reduces need for multiple disconnected brands",
      "Improves convenience in family practice",
      "Flexible options across symptomatic presentations"
    ],
    image: cpimg,
    medicines: makeMedicines([
      "EFFLUX-D",
      "EHUCA-Nano/60k",
      "Varpol-G2",
      "Zumocef-CV/100/200",
      "VARMONT-L",
      "Aziprex-500",
      "ZIAPREX-O/100/200",
      "VARFAST-OD",
      "Varfast LC",
      "Oflavar-O",
      "Vxrol",
      "Itravar",
      "Ze-21 Tab",
    ]),
  },
  {
    id: 5,
    name: "Optho",
    category: "Ophthalmology",
    description: "Eye-care centered combinations curated to support symptomatic relief and comprehensive ophthalmic practice needs.",
    benefits: [
      "Supports common ophthalmic treatment plans",
      "Useful mix of anti-inflammatory and supportive therapies",
      "Suitable for routine follow-up and OPD usage",
      "Helps streamline eye-care prescriptions"
    ],
    image: opthoimg,
    medicines: makeMedicines([
      "VAR-CMC",
      "VARCORT-6",
      "Ze-21Sy/Tab",
      "VARMONT-L",
      "Varace-P/SP",
      "ZIAPREX-O/100/200",
      "EFFLUX-D",
    ]),
  },
  {
    id: 6,
    name: "Ent",
    category: "ENT",
    description: "Focused ENT product mix aimed at infection, inflammation, and respiratory-allergic support in everyday practice.",
    benefits: [
      "Supports upper respiratory and ENT symptom management",
      "Useful for seasonal and recurrent case patterns",
      "Balanced options for physician-led treatment",
      "Efficient set for outpatient consultation"
    ],
    image: entimg,
    medicines: makeMedicines([
      "Zumocef-CV/100/200",
      "VARMONT-L",
      "Aziprex-500",
      "VARCORT-6",
      "EFFLUX-D",
    ]),
  },
  {
    id: 7,
    name: "TB & Chest",
    category: "Pulmonology",
    description: "Chest and respiratory supportive range built for physicians managing complex respiratory symptom profiles.",
    benefits: [
      "Supports respiratory case management",
      "Useful in infection and inflammation-focused plans",
      "Broad options for chest physician needs",
      "Helps in continuity of respiratory care"
    ],
    image: tbChestimg,
    medicines: makeMedicines([
      "Zumocef-CV/100/200",
      "VARMONT-L",
      "Aziprex-500",
      "VARCORT-6",
      "ZIAPREX-O/100/200",
      "Ze-21Sy/Tab",
      "EFFLUX-D",
      "IROFES-XT",
    ]),
  },
  {
    id: 8,
    name: "GP",
    category: "General Physician",
    description: "Extensive general physician portfolio designed for broad OPD coverage across frequently encountered conditions.",
    benefits: [
      "Covers diverse day-to-day GP needs",
      "Supports treatment flexibility in mixed patient groups",
      "Optimized for practical OPD prescribing",
      "Reduces complexity with a unified product basket"
    ],
    image: gpimg,
    medicines: makeMedicines([
      "EFFLUX-D",
      "EHUCA-Nano/60k",
      "Varpol-G2",
      "Zumocef-CV/100/200",
      "VARMONT-L",
      "Aziprex-500",
      "ZIAPREX-O/100/200",
      "VARFAST-OD",
      "Varfast LC",
      "Oflavar-O",
      "Vxrol",
      "IROFES-XT",
      "Itravar",
      "Varace-P/SP",
    ]),
  },
];

