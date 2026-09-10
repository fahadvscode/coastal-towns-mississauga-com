/**
 * JSON-LD builders. All blocks read from lib/content.ts.
 *
 * AggregateOffer uses the widest reported range across conflicting sources and
 * must be tightened once a single confirmed price list is available.
 * NO RealEstateAgent, operator Person, or brokerage Organization.
 */

import {
  BUILDER,
  FAQS,
  GALLERY_ITEMS,
  GEO,
  HOME_TYPES,
  LAST_UPDATED_ISO,
  LEGACY_NAME,
  PAGE_META,
  PRICE_HIGH,
  PRICE_LOW,
  PROJECT_NAME,
  SITE_ORG_NAME,
  SITE_URL,
  STATUS,
  STREET_ADDRESS,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  ADDRESS_COUNTRY,
} from "./content";
import { canonical } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: PROJECT_NAME,
    alternateName: LEGACY_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    description:
      "An independent information and registration resource for South Banks Towns, formerly marketed as Coastal Towns. Not affiliated with or endorsed by Deco Homes or Opus Homes.",
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "South Banks Towns",
    alternateName: "Coastal Towns",
    description:
      "South Banks Towns, formerly marketed as Coastal Towns, is a pre-construction waterfront townhome community by Deco Homes and Opus Homes at 1110 Lakeshore Road East in Mississauga's Lakeview Village.",
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      addressCountry: ADDRESS_COUNTRY,
    },
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/south-banks-hero.jpg`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Builder", value: BUILDER },
      { "@type": "PropertyValue", name: "Status", value: STATUS },
      { "@type": "PropertyValue", name: "Home types", value: HOME_TYPES },
      { "@type": "PropertyValue", name: "Former name", value: LEGACY_NAME },
    ],
  };
}

/**
 * This range blends the widest reported figures across conflicting sources and must
 * be tightened once a single confirmed price list is available.
 */
export function aggregateOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    priceCurrency: "CAD",
    lowPrice: PRICE_LOW,
    highPrice: PRICE_HIGH,
    availability: "https://schema.org/PreOrder",
    url: `${SITE_URL}/pricing`,
    priceValidUntil: LAST_UPDATED_ISO,
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function articleSchema() {
  const meta = PAGE_META.blog;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical(meta.path)}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    inLanguage: "en-CA",
    mainEntityOfPage: canonical(meta.path),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/south-banks-hero.jpg`,
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-CA",
    dateModified: LAST_UPDATED_ISO,
  };
}

export function gallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "South Banks Towns renderings and Lakeview Village context",
    url: canonical("/gallery"),
    image: GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${item.fallbackSrc}`,
      url: `${SITE_URL}${item.src}`,
      name: item.title,
      caption: item.caption,
      description: item.alt,
      width: item.width,
      height: item.height,
    })),
  };
}
