export interface TimelineItem {
  year: string;
  title: string;
  content: string;
  icon: string;
}

export const timelineData: TimelineItem[] = [
  {
    year: '2010',
    title: 'The Beginning',
    content: 'Our journey started with a single grape farm in the heart of India.',
    icon: '🌱'
  },
  {
    year: '2015',
    title: 'First Harvest',
    content: 'Successfully harvested and processed our first batch of premium raisins.',
    icon: '🍇'
  },
  {
    year: '2018',
    title: 'Expansion',
    content: 'Expanded our operations to include multiple farms across the region.',
    icon: '🚜'
  },
  {
    year: '2020',
    title: 'National Reach',
    content: 'Started distributing our products nationwide through various channels.',
    icon: '🚚'
  },
  {
    year: '2022',
    title: 'Retail Launch',
    content: 'Launched our products in major retail stores across the country.',
    icon: '🏪'
  },
  {
    year: '2023',
    title: 'Global Vision',
    content: 'Began exporting our premium raisins to international markets.',
    icon: '🌍'
  }
];