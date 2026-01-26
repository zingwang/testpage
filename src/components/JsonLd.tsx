export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "이지은헤어 (Lee Jieyn Hair)",
    "image": "https://leejieun-salon.netlify.app/og-image.jpg",
    "url": "https://leejieun-salon.netlify.app",
    "telephone": "+82-10-9800-7160",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "관양동",
      "addressLocality": "안양시 동안구 관양동",
      "addressRegion": "경기도",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.3947,
      "longitude": 126.9526
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "servesCuisine": "Hair Salon",
    "description": "안양 관양동 미용실. 컷 & 펌 전문, 30년 이상의 경력과 노하우로 자연스러운 스타일링을 제공합니다.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
