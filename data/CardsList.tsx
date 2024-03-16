interface Card {
  id: number;
  name: string;
  image: string;
}

export const CardsList: Card[] = [
  {
    id: 1,
    name: 'Master Card',
    image: '/master-card.png',
  },
  {
    id: 2,
    name: 'Visa Card',
    image: '/visa.png',
  },
  {
    id: 3,
    name: 'Apple Pay',
    image: '/apple-pay.png',
  },
  {
    id: 4,
    name: 'Google Pay',
    image: '/gpay.png',
  },
  {
    id: 5,
    name: 'Cash',
    image: '/money.png',
  },
];
