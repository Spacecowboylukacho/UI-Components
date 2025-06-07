// pages/CardsPage.jsx
import { useParams } from "react-router-dom";

export default function CardsPage() {
    const { id } = useParams();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">User Detail Page</h1>
            <p className="mt-2 text-lg">You are viewing details for item with ID: {id}</p>
            {/* Optionally fetch and display item details using the id */}
        </div>
    );
}
