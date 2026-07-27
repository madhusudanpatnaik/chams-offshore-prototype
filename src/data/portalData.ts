import { ClientProject } from '../types';

export const clientProjectsData: ClientProject[] = [
  {
    id: 'proj-001',
    code: 'CHAMS-2026-FPSO-88',
    name: 'FPSO Seascape Topside Module M-04 Fabrication',
    clientName: 'Seascape Offshore Energy Corp.',
    siteLocation: 'Jurong Fabrication Yard, Bay 3',
    vesselName: 'FPSO Seascape',
    status: 'QA Inspection',
    progress: 88,
    startDate: '2026-02-01',
    targetDelivery: '2026-08-30',
    safetyRating: '100% Zero-Harm (840 Days Incident Free)',
    milestones: [
      { name: 'Plate Cutting & Sub-Assembly', date: '2026-03-10', completed: true },
      { name: 'Structural Welding & 100% UT/MPI Test', date: '2026-05-15', completed: true },
      { name: 'Piping Spool Fit-Up & Hydrotest', date: '2026-06-30', completed: true },
      { name: 'Grit Blasting & 3-Coat Marine Painting', date: '2026-07-20', completed: true },
      { name: 'E&I Cable Pulling & FAT Testing', date: '2026-08-10', completed: false },
      { name: 'Loadout & Offshore Heavy Lifting', date: '2026-08-28', completed: false }
    ],
    documents: [
      { title: 'DNV Hull Structural Weld Inspection Report.pdf', size: '4.2 MB', type: 'PDF Report', date: '2026-07-15' },
      { title: 'Piping Hydrostatic Pressure Test Certificate (10k PSI).pdf', size: '2.8 MB', type: 'QA/QC Certificate', date: '2026-07-18' },
      { title: 'Module M-04 Center of Gravity (CoG) Weighing Sheet.pdf', size: '1.9 MB', type: 'Engineering Doc', date: '2026-07-21' },
      { title: 'ISO 45001 HSE Daily Clearance Log.pdf', size: '1.1 MB', type: 'Safety Record', date: '2026-07-23' }
    ],
    liveCameraAvailable: true
  },
  {
    id: 'proj-002',
    code: 'CHAMS-2026-ANCHOR-412',
    name: 'MV Orion Energy Main Engine Turbocharger & Hull Repair',
    clientName: 'Global Marine Fleet Carriers Ltd.',
    siteLocation: 'Singapore Eastern Working Anchorage',
    vesselName: 'MV Orion Energy',
    status: 'Installation',
    progress: 92,
    startDate: '2026-07-18',
    targetDelivery: '2026-07-28',
    safetyRating: 'Zero LTI Confirmed',
    milestones: [
      { name: 'Riding Squad Mobilization to Anchorage', date: '2026-07-18', completed: true },
      { name: 'MAN B&W Turbocharger Rotor Teardown', date: '2026-07-20', completed: true },
      { name: 'Dynamic Balancing & Nozzle Ring Replacement', date: '2026-07-22', completed: true },
      { name: 'Sea Trial & Class Surveyor Sign-Off', date: '2026-07-26', completed: false }
    ],
    documents: [
      { title: 'MAN B&W Rotor Balance Calibration Sheet.pdf', size: '3.1 MB', type: 'Tech Certificate', date: '2026-07-22' },
      { title: 'MPA Singapore Riding Squad Harbor Clearance.pdf', size: '850 KB', type: 'Permit', date: '2026-07-18' }
    ],
    liveCameraAvailable: false
  }
];
