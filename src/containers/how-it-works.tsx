import React from 'react';
import FeatureBlock from 'components/feature-block';

const data = [
  {
    id: 1,
    background: '#feeec8',
    title: 'เลือกสินค้าที่ต้องการ',
    description: 'รายละเอียดของสินค้าจะถูกอธิบายในสินค้าชิ้นนั้นๆ',
  },
  {
    id: 2,
    background: '#ceeffe',
    title: 'เพิ่มสินค้าลงในตะกร้าของคุณ',
    description:
      'คำสั่งซื้อของคุณอยู่ระหว่างการเลือก และตอนนี้จะถูกส่งต่อเพื่อบรรจุภัณฑ์',
  },
  {
    id: 3,
    background: '#d4f8c4',
    title: 'ชำระเงิน',
    description: 'ทางเรากำลังบรรจุคำสั่งซื้อของคุณ',
  },
  {
    id: 4,
    background: '#d8dafe',
    title: 'จัดส่ง',
    description:
      'คำสั่งซื้อของคุณได้รับการจัดเตรียมและจัดส่งแล้ว จะถูกจัดส่งเร็วๆนี้',
  },
];

export default function HowItWorks() {
  return (
    <div className="flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
      <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
        {data.map((item, index) => (
          <FeatureBlock
            key={item.id}
            title={item.title}
            description={item.description}
            counterBg={item.background}
            counter={index + 1}
            className="feature-block"
          />
        ))}
      </div>
    </div>
  );
}
