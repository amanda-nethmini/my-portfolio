import React from 'react';

interface CardData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    tags?: string[];
}

const CardComponent: React.FC<{ card: CardData }> = ({ card }) => {
    return (
        <div className="flex flex-row  bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <div className="w-1/4 hidden lg:block">
                <img className="object-cover w-full h-full" src={card?.imageUrl} alt={card.title} />
            </div>
            <div className="w-full lg:w-3/4 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">{card.title}</h1>
                <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                {card.tags &&
                    <div className="flex flex-wrap mt-6">
                        {card.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="text-xs mr-1 mt-1 inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-[#feb9ff] text-gray-700 border"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>}
            </div>
        </div>
    );
};

export default CardComponent;
