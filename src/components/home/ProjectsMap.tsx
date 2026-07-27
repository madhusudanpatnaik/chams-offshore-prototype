import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { sitesData } from '../../data/sitesData';
import { ConstructionSite } from '../../types';
import { handleImageError } from '../../lib/imageUtils';
import { OptimizedImage } from '../ui/OptimizedImage';
import {
  MapPin,
  ShieldCheck,
  Users,
  Anchor,
  Clock,
  Layers,
  Activity,
  CheckCircle,
  HardHat
} from 'lucide-react';

export const ProjectsMap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSite, setSelectedSite] = useState<ConstructionSite>(sitesData[0]);
  const [mapLoaded, setMapLoaded] = useState(false);

  const categories = ['All', 'Fabrication Yard', 'Offshore Rig', 'Anchorage Site', 'Repair Dock'];

  const filteredSites = selectedCategory === 'All'
    ? sitesData
    : sitesData.filter(s => s.category === selectedCategory);

  useEffect(() => {
    // Leaflet dynamic map initialization
    let mapInstance: any = null;

    const initMap = async () => {
      if (typeof window !== 'undefined') {
        const L = (await import('leaflet')).default;
        
        const mapContainer = document.getElementById('chams-sites-map');
        if (!mapContainer) return;

        // Reset container if re-rendering
        if ((mapContainer as any)._leaflet_id) {
          (mapContainer as any)._leaflet_id = null;
          mapContainer.innerHTML = '';
        }

        // Center around Singapore / South China Sea (1.28, 103.85)
        mapInstance = L.map('chams-sites-map', {
          center: [1.25, 103.95],
          zoom: 10,
          zoomControl: true,
          scrollWheelZoom: false
        });

        // Dark CartoDB Tile Layer for corporate marine aesthetic
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(mapInstance);

        // Custom Metallic Gold Marker Icons
        const goldIcon = L.divIcon({
          className: 'custom-gold-marker',
          html: `<div class="relative flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-amber-400 opacity-75"></span>
            <div class="w-8 h-8 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center shadow-2xl">
              <div class="w-3 h-3 rounded-full bg-amber-400"></div>
            </div>
          </div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        // Add markers for filtered sites
        filteredSites.forEach((site) => {
          const marker = L.marker(site.coordinates, { icon: goldIcon }).addTo(mapInstance);

          marker.bindPopup(`
            <div class="p-3 text-slate-100 max-w-xs font-sans">
              <span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                ${site.category}
              </span>
              <h4 class="text-sm font-bold text-white mt-1.5 font-heading">${site.name}</h4>
              <p class="text-xs text-slate-300 mt-1">${site.locationName}</p>
              <div class="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span class="text-emerald-400 font-semibold">Progress: ${site.progressPercentage}%</span>
                <span class="text-slate-400">${site.activePersonnel} Personnel</span>
              </div>
            </div>
          `);

          marker.on('click', () => {
            setSelectedSite(site);
          });
        });

        setMapLoaded(true);
      }
    };

    initMap();

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [selectedCategory]);

  return (
    <section id="interactive-map" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Live Operations & Construction Sites</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
              Current <span className="gold-gradient-text">Offshore & Yard Sites</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base">
              Real-time map tracking CHAMS fabrication yards, offshore rig upgrade deployments, anchorage riding squads, and active vessel repairs in Singapore waters.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Map & Site Detail Panel Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* Leaflet Interactive Map Container */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative min-h-[460px] flex flex-col">
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-bold">SINGAPORE STRAIT & REGIONAL MARINE MAP</span>
              </div>
              <span className="hidden sm:inline text-amber-400">LAT 1.2500° N / LNG 103.9500° E</span>
            </div>

            {/* Map Element */}
            <div id="chams-sites-map" className="w-full h-[400px] sm:h-[450px] z-10" />
          </div>

          {/* Site Detail Inspector Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {selectedSite.category}
              </span>

              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{selectedSite.status}</span>
              </span>
            </div>

            {/* Title & Vessel */}
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                {selectedSite.name}
              </h3>
              <p className="text-xs text-amber-300 font-mono mt-1 flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-amber-400" />
                <span>{selectedSite.vesselOrRig}</span>
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative h-40 rounded-xl overflow-hidden border border-slate-800">
              <OptimizedImage
                src={selectedSite.imageUrl}
                alt={selectedSite.name}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              <div className="absolute bottom-2 left-3 right-3 text-xs text-slate-300 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{selectedSite.locationName}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedSite.description}
            </p>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <HardHat className="w-3.5 h-3.5 text-amber-400" />
                  <span>Site Supervisor</span>
                </div>
                <p className="text-xs font-bold text-white truncate">{selectedSite.supervisor}</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                  <span>Deployed Personnel</span>
                </div>
                <p className="text-xs font-bold text-white">{selectedSite.activePersonnel} Technicians</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Site HSE Record</span>
                </div>
                <p className="text-xs font-bold text-emerald-400">{selectedSite.safetyDays} Days Zero-LTI</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Est. Completion</span>
                </div>
                <p className="text-xs font-bold text-white">{selectedSite.estCompletion}</p>
              </div>
            </div>

            {/* Progress Gauge */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">Work Scope Completion</span>
                <span className="text-amber-400">{selectedSite.progressPercentage}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500 rounded-full"
                  style={{ width: `${selectedSite.progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
