import React from 'react';
import Carousel from 'components/carousel/carousel';

const data = [
  {
    id: 1,
    image: '/images/3thingtocare.png',
    link: '#',
    title: '3thingtocare',
  },
  {
    id: 2,
    image: '/images/HBPage.png',
    link: '#',
    title: 'HBPage',
  },
  {
    id: 3,
    image: '/images/thantavatpage1.png',
    link: '/',
    title: 'thantavatpage1',
  },
  {
    id: 4,
    image: '/images/thantavathowto.png',
    link: '/faq',
    title: 'thantavathowto',
  },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative my-35px">
      <Carousel data={data} itemClass="px-5px" />
    </div>
  );
}
