import React from 'react';
import { LocationCard } from './LocationCard';
import type { Location } from '../types';

interface Props {
  locations: Location[];
  directionSlug: string;
}

export function LocationsGrid({ locations, directionSlug }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location) => (
        <LocationCard 
          key={location.slug} 
          location={location} 
          directionSlug={directionSlug}
        />
      ))}
    </div>
  );
}