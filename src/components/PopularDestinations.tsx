import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PopularDestinations = () => {
  const { t } = useTranslation();
  const destinations = [
    {
      name: 'Dar es Salaam',
      properties: '120+',
      image: 'data:image/jpeg;base64,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',
      price: 'TSh 30,000'
    },
    {
      name: 'Arusha',
      properties: '85+',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEwgqGS8KjETj3B3dCP1aiX1sKedJyrTu9A&s',
      price: 'TSh 40,000'
    },
    {
      name: 'Mwanza',
      properties: '60+',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      price: 'TSh 50,000'
    },
    {
      name: 'Dodoma',
      properties: '45+',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop',
      price: 'TSh 100,000'
    },
    {
      name: 'Zanzibar',
      properties: '30+',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      price: 'TSh 200,000'
    },
    {
      name: 'Mbeya',
      properties: '25+',
      image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
      price: 'TSh 20,000'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('popularDestinations.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('popularDestinations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Link 
              key={index}
              to={`/browse?location=${encodeURIComponent(destination.name)}`}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.properties} {t('popularDestinations.properties')}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{t('popularDestinations.startingFrom')} {destination.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;