import type { HistoricalSite } from './map';
import { Marker, Popup } from 'react-leaflet';

interface MapMarkerProps {
  site: HistoricalSite;
}

const MapMarker = ({ site }: MapMarkerProps) => {
  return (
    <Marker position={site.position}>
      <Popup>
        <div>
          <h3 className="font-medium">{site.name}</h3>
          <p className="text-sm">{site.description}</p>
          <a
            href={site.slug}
            className="text-sm text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
          >
            Xem chi tiết
          </a>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
