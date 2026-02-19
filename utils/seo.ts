import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://kidsaanzee.be/og-image.jpg',
  canonical,
  structuredData
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', canonical || `https://kidsaanzee.be${location.pathname}`, true);

    // Twitter Card
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || `https://kidsaanzee.be${location.pathname}`);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-dynamic', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset to default on unmount if needed
    };
  }, [title, description, keywords, ogImage, canonical, structuredData, location]);
};

// SEO Metadata for each page type
export const SEO_DATA = {
  home: {
    title: 'KidsAanZee.be | Binnenkort — Dé Kustgids voor Gezinnen aan de Belgische Kust',
    description: 'Binnenkort online: dé complete gids voor gezinnen aan de Belgische kust. Speeltuinen, kindvriendelijke restaurants, topactiviteiten en praktische info van De Panne tot Knokke.',
    keywords: 'kids aan zee, kinderen belgische kust, speeltuin aan zee, kindvriendelijk restaurant kust, gezinsvakantie zee, activiteiten kinderen strand, gezin belgische kust'
  },
  
  hotspots: {
    title: 'Kids Hotspots Belgische Kust | Speeltuinen, Attracties & Kindvriendelijke Plekken',
    description: 'Ontdek de leukste speeltuinen, attracties en kindvriendelijke plekken aan de Belgische kust. Van De Panne tot Knokke - waar kinderen écht welkom zijn.',
    keywords: 'speeltuin belgische kust, kindvriendelijke plekken aan zee, attracties kinderen kust, kids hotspots strand'
  },
  
  diensten: {
    title: 'Kindvriendelijke Horeca Belgische Kust | Restaurants & Strandbars voor Gezinnen',
    description: 'Vind de beste kindvriendelijke restaurants en strandbars aan de Belgische kust. Met speelhoek, kinderstoel en lekker kindermenu.',
    keywords: 'kindvriendelijk restaurant kust, gezinsrestaurant aan zee, kindermenu strand, speelhoek restaurant kust'
  },

  losloopzones: {
    title: 'Activiteiten Belgische Kust | De Beste Uitjes voor Kinderen aan Zee',
    description: 'De leukste activiteiten voor kinderen aan de Belgische kust. Van musea tot gocarts, voor regenachtige en zonnige dagen.',
    keywords: 'activiteiten kinderen kust, uitjes gezin belgische kust, musea kinderen aan zee, gocart strand'
  },
  
  privacy: {
    title: 'Privacybeleid | KidsAanZee.be',
    description: 'Privacybeleid van KidsAanZee.be - Hoe wij omgaan met je gegevens volgens AVG/GDPR',
    keywords: ''
  },
  
  terms: {
    title: 'Algemene Voorwaarden | KidsAanZee.be',
    description: 'Algemene voorwaarden voor het gebruik van KidsAanZee.be',
    keywords: ''
  },
  
  cookies: {
    title: 'Cookiebeleid | KidsAanZee.be',
    description: 'Cookiebeleid van KidsAanZee.be - Welke cookies we gebruiken en waarom',
    keywords: ''
  }
};

// Generate city-specific SEO data
export const getCitySEO = (cityName: string, citySlug: string) => {
  const searchTerms = [
    `kinderen strand ${cityName.toLowerCase()}`,
    `speeltuin ${cityName.toLowerCase()}`,
    `kindvriendelijk ${cityName.toLowerCase()}`,
    `activiteiten kinderen ${cityName.toLowerCase()}`,
    `gezinsvakantie ${cityName.toLowerCase()}`,
    `restaurant kinderen ${cityName.toLowerCase()}`
  ];

  return {
    title: `Kids ${cityName} 2026 | Speeltuinen, Horeca & Activiteiten voor Gezinnen in ${cityName}`,
    description: `✓ De leukste speeltuinen in ${cityName} ✓ Kindvriendelijke restaurants ✓ Topactiviteiten voor kinderen ✓ Praktische info voor gezinnen in ${cityName}`,
    keywords: searchTerms.join(', '),
    canonical: `https://kidsaanzee.be/#/${citySlug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": `${cityName} - Kindvriendelijk aan Zee`,
      "description": `Informatie over speeltuinen, horeca en activiteiten voor kinderen in ${cityName} aan de Belgische kust`,
      "url": `https://kidsaanzee.be/#/${citySlug}`,
      "isAccessibleForFree": true,
      "publicAccess": true,
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "BE"
      },
      "touristType": ["Family", "Parents", "Children"],
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Kindvriendelijk strand",
          "value": true
        }
      ]
    }
  };
};
