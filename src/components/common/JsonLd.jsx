export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Varsal Healthcare Pvt Ltd',
    alternateName: 'Varsal Healthcare',
    url: 'https://varsalhealthcare.com',
    logo: 'https://varsalhealthcare.com/logo.png',
    description: 'Varsal Healthcare is a leading pharmaceutical company dedicated to enhancing quality of life through breakthrough medical solutions and patient-centered care.',
    foundingDate: '2020',
    industry: 'Pharmaceutical',
    sameAs: [
      // Add social media URLs when available
      // 'https://www.linkedin.com/company/varsalhealthcare',
      // 'https://twitter.com/varsalhealthcare',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Varsal Healthcare',
    url: 'https://varsalhealthcare.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://varsalhealthcare.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Varsal Healthcare Pvt Ltd',
    description: 'Pharmaceutical company providing innovative medical solutions in gynecology, orthopedic, and surgical products.',
    url: 'https://varsalhealthcare.com',
    medicalSpecialty: [
      'Gynecology',
      'Orthopedic',
      'Surgery',
    ],
    priceRange: '$$',
    isAcceptingNewPatients: true,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema({ name, description, image, brand = 'Varsal Healthcare', category }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand
    },
    category,
    offers: {
      '@type': 'Offer',
      url: 'https://varsalhealthcare.com/contact',
      price: '0',
      priceCurrency: 'INR'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
