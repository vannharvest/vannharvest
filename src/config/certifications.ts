import { StaticImageData } from 'next/image';

export interface Certification {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export const certifications: Certification[] = [
  {
    title: 'APEDA Registered',
    description: 'Registered with the Agricultural and Processed Food Products Export Development Authority for quality exports.',
    image: '/images/certification/APEDA.avif',
    alt: 'APEDA Registration',
    width: 180,
    height: 180
  },
  {
    title: 'APMC Licensed',
    description: 'Licensed by the Agricultural Produce Market Committee for fair trade practices.',
    image: '/images/certification/APMC.avif',
    alt: 'APMC License',
    width: 180,
    height: 180
  },
  {
    title: 'FSSAI Certified',
    description: 'Certified by the Food Safety and Standards Authority of India for food safety compliance.',
    image: '/images/certification/FSSAI.avif',
    alt: 'FSSAI Certification',
    width: 180,
    height: 180
  },
  {
    title: 'ISO 22000:2018',
    description: 'Food Safety Management System Certification ensuring safe food production processes.',
    image: '/images/certification/iso-22000-2018.avif',
    alt: 'ISO 22000:2018 Certification',
    width: 180,
    height: 180
  },
  {
    title: 'HACCP Certified',
    description: 'Hazard Analysis and Critical Control Points certification for food safety.',
    image: '/images/certification/HACCP.avif',
    alt: 'HACCP Certification',
    width: 180,
    height: 180
  },
  {
    title: 'Organic Certified',
    description: 'Certified organic production methods ensuring chemical-free, natural raisins.',
    image: '/images/certification/Organic.avif',
    alt: 'Organic Certification',
    width: 180,
    height: 180
  }
];
