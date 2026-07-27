import { CareerOpportunity } from '../types';

export const careersData: CareerOpportunity[] = [
  {
    id: 'car-01',
    title: 'Senior Offshore Structural Welder (DNV / AWS Certified 6G/6GR)',
    department: 'Fabrication & Offshore Operations',
    location: 'Jurong Yard / Offshore Riding Squads (Singapore)',
    type: 'Full-time Offshore',
    experience: '5+ years in offshore oil & gas structural welding',
    description: 'We are seeking experienced 6G/6GR welders certified in FCAW, SMAW, and GTAW process for heavy module fabrication and offshore structural repairs.',
    requirements: [
      'Valid DNV / ABS 6G or 6GR Welder Performance Qualification (WPQ) card',
      'Min 5 years experience with high-yield marine steel (S355ML, EH36)',
      'Valid BOSIET / OPITO certification for offshore mobilization is an advantage',
      'Knowledge of AWS D1.1 structural welding code and WPS parameters',
      'Strong safety mindset with commitment to CHAMS Zero-Harm policy'
    ],
    responsibilities: [
      'Execute multi-pass heavy structural welds on topside modules and vessel hull inserts',
      'Perform root-pass welding under strict ultrasonic and magnetic particle testing (UT/MPI)',
      'Collaborate with QC Inspectors and Class Surveyors during weld hold points',
      'Maintain hot work safety controls, gas testing verification, and equipment care'
    ]
  },
  {
    id: 'car-02',
    title: 'Lead Hydraulic & Piping Engineer',
    department: 'Engineering & Commissioning',
    location: 'Tuas Engineering HQ, Singapore',
    type: 'Full-time Yard',
    experience: '7+ years in high-pressure hydraulic & exotic piping systems',
    description: 'Lead engineer responsible for hydraulic system overhauls, high-pressure line flushing, valve automation, and exotic alloy pipe spool fabrication.',
    requirements: [
      'Degree in Mechanical or Marine Engineering from recognized university',
      'Expertise in ASME B31.3 piping codes and hydraulic fluid power systems',
      'Hands-on experience with NAS Class 6 oil flushing skids and 10,000+ PSI hydro-testing',
      'Proficiency in AutoCAD / SolidWorks pipe routing and isometric reading'
    ],
    responsibilities: [
      'Design pipe isometric layouts and specify material bill of quantities (MTO)',
      'Supervise workshop and field high-pressure flushing, pressure testing, and chemical cleaning',
      'Prepare technical proposals, hydrotest packages, and class approval documentation',
      'Interface directly with clients and marine classification surveyors'
    ]
  },
  {
    id: 'car-03',
    title: 'Marine Electrical & Instrumentation (E&I) Specialist',
    department: 'Electrical & Automation',
    location: 'Offshore Fields & Shipyard Sites',
    type: 'Full-time Offshore',
    experience: '4+ years in EX explosion-proof systems and main switchboards',
    description: 'Specialist engineer for offshore high-voltage switchboard servicing, ATEX instrumentation calibration, and generator synchronizing controls.',
    requirements: [
      'Diploma/Degree in Electrical Engineering or Marine Electro-Technical Officer (ETO)',
      'COMPEx / IECEx certification for hazardous area equipment inspection',
      'Experience with PLC automation systems (Siemens S7, Schneider, ABB)',
      'Valid BOSIET / OPITO offshore safety credentials'
    ],
    responsibilities: [
      'Inspect and calibrate ATEX flameproof and intrinsically safe sensors',
      'Troubleshoot dynamic positioning (DP2/DP3) marine switchboards and generator controls',
      'Execute high-voltage cable splicing, megger insulation testing, and loop checks',
      'Maintain field inspection logs and EX compliance registers'
    ]
  },
  {
    id: 'car-04',
    title: 'HSE Coordinator / Safety Inspector',
    department: 'Health, Safety & Environment',
    location: 'Singapore Yards & Offshore Sites',
    type: 'Full-time Yard',
    experience: '3+ years in ship repair & offshore HSE management',
    description: 'Safety professional enforcing ISO 45001 safety management system, conducting risk assessments (JSA), and supervising hot work & enclosed space entries.',
    requirements: [
      'Registered WSHO (Workplace Safety & Health Officer) with MOM Singapore or NEBOSH IGC',
      'Strong knowledge of MOM Shipyard Safety Regulations and SS 510',
      'Experience in gas safety testing, scaffold inspection, and heavy lift risk management'
    ],
    responsibilities: [
      'Conduct daily toolbox meetings, site HSE audits, and incident investigations',
      'Issue and verify Permits-to-Work (PTW) for hot work, confined space, and lifting ops',
      'Maintain zero-harm culture and conduct emergency response drills'
    ]
  }
];
