

// CardList.jsx
import Card from '../Components/Card.jsx';

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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
            {cardData.map(({ id, image, alt, title, description }) => (
                <Card
                    id={id}
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
