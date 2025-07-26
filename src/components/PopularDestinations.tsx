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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dar_es_Salaam_-_Posta.jpg/1024px-Dar_es_Salaam_-_Posta.jpg',
      price: 'TSh 30,000'
    },
    {
      name: 'Arusha',
      properties: '85+',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
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