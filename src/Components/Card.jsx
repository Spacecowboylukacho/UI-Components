import Button from './Button'

// Card.jsx
export default function Card({ image, alt, title, description, action}) {
    return (
        <div className="card">
            <div className="border-black rounded-lg p-2 border-[0.5px]">
                <img
                    className="object-cover object-center w-46 h-40"
                    src={image}
                    alt={alt}
                />
            </div>
            <div className="flex flex-col">
                <h1>{title}</h1>
                <p className="text-sm mb-3">{description}</p>
                <Button onClick={action}/>
            </div>
        </div>
    );
}
