import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'structural-fabrication',
    slug: 'structural-module-fabrication-installation',
    title: 'Structural Module Fabrication & Installation',
    shortDescription: 'Heavy structural module fabrication, deck modifications, jacket repairs, and offshore heavy lifting installation.',
    fullDescription: 'CHAMS Offshore Engineering delivers end-to-end structural module fabrication, living quarter extensions, helideck structures, flare towers, and FPSO topside module construction. Operating out of class-certified fabrication facilities, our AWS and DNV certified welders execute high-yield steel engineering with absolute precision.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      'Topside Module & Skids Engineering Fabrication',
      'Helideck & Offshore Crane Pedestal Modifications',
      'High-Tensile Steel (EH36, S355ML) Hull Structural Patching',
      'Offshore Heavy Lift Engineering & Rigging Work',
      'DNV / ABS Class Approved NDT & Ultrasonic Testing',
      'Underwater Structural Reinforcement Support'
    ],
    keyEquipment: [
      'CNC Plasma & Oxy-Fuel Plate Cutting Gantry',
      '800-Ton Hydraulic Brake Press & Heavy Rolling Mills',
      'Automatic Submerged Arc Welding (SAW) Stations',
      'DNV Certified Rigging & Spreader Bar Systems'
    ],
    standards: ['AWS D1.1', 'ISO 3834-2', 'DNV-ST-N001', 'ABS Hull Structural Standard'],
    iconName: 'Building2'
  },
  {
    id: 'piping-hydraulic',
    slug: 'piping-hydraulic-works',
    title: 'Piping & Hydraulic Works',
    shortDescription: 'High-pressure process piping, duplex stainless steel fabrication, hydraulic power pack overhauls, and Flushing & Pressure Testing.',
    fullDescription: 'We specialize in high-pressure hydraulic line installation, cargo oil piping renewals, ballast water management piping systems, and exotic alloy fabrication (Super Duplex, Titanium, Copper-Nickel, CuNi). Our team executes offshore hot work, hydro-testing, oil flushing to NAS Class 6 purity, and nitrogen purging.',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      'Process Piping Fabrication (Stainless Steel, Duplex, CuNi, Inconel)',
      'Hydraulic Power Unit (HPU) Overhauls & Cylinder Rebuilding',
      'High-Pressure Hydrostatic Testing up to 15,000 PSI',
      'Chemical Cleaning & Flushing to NAS 6 / ISO 4406 Cleanliness',
      'Cryogenic & LPG/LNG Line Insulation & Pre-Commissioning',
      'In-situ Valve Lap & Seal Seat Refacing'
    ],
    keyEquipment: [
      'Orbital TIG Welding Stations for Exotic Pipe Spools',
      'High-Flow Chemical Flushing & Decontamination Skid',
      'Mobile 1,000 Bar Hydrotest Pump Skids with Calibrated Loggers',
      'Hydraulic Hose Crimping Machines (Up to 3-inch 6-wire)'
    ],
    standards: ['ASME B31.3', 'ASME Section IX', 'DNV-CG-0182', 'API 570 Piping Inspection'],
    iconName: 'Wrench'
  },
  {
    id: 'mechanical-services',
    slug: 'machinery-mechanical-services',
    title: 'Mechanical Services',
    shortDescription: 'Comprehensive overhaul of main propulsion engines, generators, bow thrusters, winches, and pumps.',
    fullDescription: 'Delivering precision mechanical engineering for marine and offshore installations. From complete main engine teardowns (MAN B&W, Wärtsilä, Caterpillar) to dynamic balancing of turbochargers, align-boring of stern tubes, and overhaul of heavy anchor handling winches.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      '2-Stroke & 4-Stroke Diesel Engine Overhauls & In-situ Line Boring',
      'Thruster, Azimuth, and CPP Propeller Shaft Repairs',
      'Cargo Oil Pump (COP) & Deepwell Pump Servicing',
      'Mooring Winch, Anchor Windlass & Deck Crane Gearbox Overhauls',
      'Laser Shaft Alignment & Vibration Analysis Diagnostics',
      'Thermal Spray Coating & Journal Machining'
    ],
    keyEquipment: [
      'Easy-Laser E710 Shaft Alignment & Geometry System',
      'Portable Line Boring Rig for Engine Block & Stern Tube Hinging',
      '200-Ton Hydraulic Puller & Bearing Heater Sets',
      'Dynamic Balancing Machine for High-RPM Rotors'
    ],
    standards: ['ISO 10816 Vibration Standard', 'ABS Machinery Rules', 'DNV Marine Diesel Standard'],
    iconName: 'Cog'
  },
  {
    id: 'electrical-instrumentation',
    slug: 'electrical-instrumentation',
    title: 'Electrical & Instrumentation',
    shortDescription: 'Switchboard modifications, high-voltage cabling, automation calibration, and ATEX/IECEx offshore control systems.',
    fullDescription: 'Full-scope marine electrical and instrumentation (E&I) solutions. We handle main switchboard (MSB) retrofits, generator synchronizing panels, DP2/DP3 dynamic positioning cabling, intrinsically safe explosion-proof (EX) alarm systems, and PLC control commissioning.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      'Main Switchboard (MSB) & Emergency Generator Panel Servicing',
      'ATEX / IECEx Explosion-Proof Instrumentation Inspections',
      'High Voltage (6.6kV / 11kV) Offshore Cable Laying & Splicing',
      'Automation PLC Programming & SCADA Dashboard Calibration',
      'Fire & Gas Detection System Commissioning',
      'Navigation & Marine Communication Radars Alignment'
    ],
    keyEquipment: [
      'Megger 10kV Insulation Resistance Testers',
      'Fluke 754 Documenting Process Calibrators',
      'FLIR E96 Thermal Imaging Cameras for Hot-Spot Analysis',
      'Secondary Current Injection Test Kits'
    ],
    standards: ['IEC 60092 Marine Electrical', 'IEC 60079 Explosive Atmospheres', 'SOLAS Chapter II-1'],
    iconName: 'Zap'
  },
  {
    id: 'machinery-repair',
    slug: 'machinery-repair',
    title: 'Machinery Repair',
    shortDescription: 'On-site emergency machining, cold stitching, turbine overhaul, compressor reconditioning, and metal spraying.',
    fullDescription: 'Specialized emergency repair services for critical marine and offshore machinery. Our specialized mobile response crews perform in-situ flange facing, crankpin grinding, cast iron metal stitching (LOCKSTITCH), heat exchanger retubing, and boiler tube replacement during port calls or offshore operations.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      'In-Situ Crankpin Orbital Grinding & Polishing',
      'Cold Metal Stitching for Cracked Engine Castings',
      'In-Situ Flange Facing Up to 3.0 Meters Diameter',
      'Boiler Retubing & Heat Exchanger Ultrasonic Cleaning',
      'Purifier, Air Compressor & Centrifuge Overhauls',
      'Hydraulic Ram & Cylinder Rod Re-chroming'
    ],
    keyEquipment: [
      'Mirage Portable Flange Facers (ID & OD Mounted)',
      'Orbital Crankpin Grinding Machines',
      'Ultrasound Tube Leak Detectors',
      'Induction Bearing Heaters & Portable Boring Bars'
    ],
    standards: ['ISO 9001:2015 QA', 'Class NK Machinery Repair Standards', 'DNV Welding Procedure Approval'],
    iconName: 'Hammer'
  },
  {
    id: 'anchorage-support',
    slug: 'anchorage-voyage-support',
    title: 'Anchorage & Voyage Support',
    shortDescription: '24/7 riding squad deployment, anchorage repairs in Singapore/Riau waters, underwater hull cleaning, and emergency afloat repairs.',
    fullDescription: 'Rapid deployment of certified offshore riding squads to vessels at anchorage or underway. Operating out of Singapore Strait and East/West OPL anchorages, our launch boats and specialized technical teams handle urgent afloat hull repairs, pipe clamping, main engine troubleshooting, and class renewal underwater surveys without voyage interruption.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      '24/7 Rapid Response Riding Squads (Welders, Fitters, Electricians)',
      'Singapore Anchorage & OPL Afloat Mechanical Repairs',
      'Underwater Hull Cleaning, Propeller Polishing & CCTV Inspection',
      'Emergency Pipe Repair & Composite Wrap Encapsulation',
      'Class Survey Preparation & Tank Cleaning Crews',
      'Provisioning of Mobile Diesel Generator & Compressor Skids'
    ],
    keyEquipment: [
      'Fully Equipped Fast Launch Craft & Supply Barges',
      'Air-Driven Underwater Hull Cleaning Karts',
      'Mobile 500 CFM Air Compressors & 250 kVA Generators',
      'Certified Offshore Survival Gear & Gas Monitoring Kits'
    ],
    standards: ['MPA Singapore Anchorage Regulations', 'BOSIET / OPITO Offshore Certified', 'ISO 45001 Safety'],
    iconName: 'Anchor'
  },
  {
    id: 'manpower-solutions',
    slug: 'technical-manpower-solutions',
    title: 'Technical Manpower Solutions',
    shortDescription: 'Certified offshore welders, piping supervisors, NDT inspectors, marine engineers, and HSE officers for global projects.',
    fullDescription: 'Providing skilled, class-certified technical manpower for offshore energy, shipbuilding, and industrial plant projects. Every specialist undergoes rigorous trade testing, safety orientation, and medical clearance before mobilization.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    ],
    capabilities: [
      'AWS / DNV Certified 6G & 6GR Alloy Welders',
      'Marine Engineers, Motormen & Chief Mechanics',
      'ASNT Level II / III NDT Technicians & QC Inspectors',
      'Offshore HSE Officers & Rope Access Technicians (IRATA)',
      'Piping Fitters, Riggers & Crane Operators',
      'Turnkey Crew Mobilization & Visa/Port Clearance Management'
    ],
    keyEquipment: [
      'Class Approved Weld Testing Facilities & Tensile Testers',
      'Digital Trade Verification Assessment Systems',
      'OPITO BOSIET Training Simulator Verification'
    ],
    standards: ['STCW 2010 Certification', 'IRATA Rope Access', 'ASNT Level II NDT', 'ISO 9001 Manpower QA'],
    iconName: 'Users'
  }
];
