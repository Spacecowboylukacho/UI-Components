

// CardList.jsx
import Card from './Card';

const cardData = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        alt: '',
        title: 'Card One',
        description: 'This is the first card.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        alt: '',
        title: 'Card Two',
        description: 'This is the second card.'
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        alt: '',
        title: 'Card Three',
        description: 'This is the third card.'
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/150',
        alt: '',
        title: 'Card Three',
        description: 'This is the third card.'
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/150',
        alt: '',
        title: 'Card Three',
        description: 'This is the third card.'
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/150',
        alt: '',
        title: 'Card Three',
        description: 'This is the third card.'
    }
];

export default function CardList() {
    return (
        <div className="cards-container grid grid-cols-4 gap-6">
            {cardData.map(({ id, image, alt, title, description }) => (
                <Card
                    key={id}
                    image={image}
                    alt={alt}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    );
}
