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
    image: '/images/certification/apeda-certification-export-quality.avif',
    alt: 'Vann Harvest APEDA Certification for Agricultural Export Quality',
    width: 180,
    height: 180
  },
  {
    title: 'APMC Licensed',
    description: 'Licensed by the Agricultural Produce Market Committee for fair trade practices.',
    image: '/images/certification/apmc-market-committee-certification.avif',
    alt: 'Vann Harvest APMC License for Agricultural Trade Compliance',
    width: 180,
    height: 180
  },
  {
    title: 'FSSAI Certified',
    description: 'Certified by the Food Safety and Standards Authority of India for food safety compliance.',
    image: '/images/certification/fssai-food-safety-certification.avif',
    alt: 'Vann Harvest FSSAI Food Safety and Standards Certification',
    width: 180,
    height: 180
  },
  {
    title: 'ISO 22000:2018',
    description: 'Food Safety Management System Certification ensuring safe food production processes.',
    image: '/images/certification/iso-22000-2018-food-safety-management-system.avif',
    alt: 'Vann Harvest ISO 22000:2018 Food Safety Management System Certification',
    width: 180,
    height: 180
  },
  {
    title: 'HACCP Certified',
    description: 'Hazard Analysis and Critical Control Points certification for food safety.',
    image: '/images/certification/haccp-food-safety-management-certification.avif',
    alt: 'Vann Harvest HACCP Food Safety and Hazard Analysis Certification',
    width: 180,
    height: 180
  },
];
