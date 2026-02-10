import { Section } from '../components/site/Section';
import { RoleDetailsAccordion, RoleDetail } from '../components/site/RoleDetailsAccordion';
import { FounderOwnerBlock } from '../components/site/FounderOwnerBlock';

export function TeamRolesSection() {
  const roles: RoleDetail[] = [
    {
      id: 'contractors',
      title: 'Contractors',
      responsibilities: [
        'Overall project management and coordination',
        'Budget planning and cost control',
        'Contract negotiation with clients and suppliers',
        'Quality assurance and compliance with building codes',
        'Timeline management and milestone tracking'
      ],
      tasks: [
        'Prepare project bids and proposals',
        'Coordinate with architects and engineers',
        'Manage subcontractor relationships',
        'Conduct site inspections and progress reviews',
        'Handle client communications and updates'
      ],
      contribution: 'Contractors serve as the backbone of project execution, ensuring all aspects of construction are coordinated seamlessly. They bridge the gap between client vision and on-ground reality, managing resources, timelines, and quality to deliver successful projects that meet or exceed expectations.'
    },
    {
      id: 'engineers',
      title: 'Engineers',
      responsibilities: [
        'Structural design and analysis',
        'Technical specifications and drawings',
        'Load calculations and foundation design',
        'Material selection and testing protocols',
        'Safety standards implementation'
      ],
      tasks: [
        'Create detailed engineering drawings',
        'Perform structural calculations and simulations',
        'Review and approve construction methods',
        'Conduct site assessments and soil testing',
        'Provide technical solutions to construction challenges'
      ],
      contribution: 'Engineers provide the technical expertise that ensures structural integrity and safety. Their calculations and designs form the blueprint for construction, guaranteeing that every foundation, wall, and structure can withstand the required loads and environmental conditions while meeting all regulatory requirements.'
    },
    {
      id: 'accountants',
      title: 'Accountants',
      responsibilities: [
        'Financial planning and budgeting',
        'Cost tracking and expense management',
        'Payroll processing for all staff',
        'Tax compliance and reporting',
        'Financial forecasting and analysis'
      ],
      tasks: [
        'Process invoices and payments',
        'Maintain accurate financial records',
        'Prepare monthly financial reports',
        'Monitor project profitability',
        'Manage cash flow and working capital'
      ],
      contribution: 'Accountants ensure the financial health of every project by maintaining accurate records, controlling costs, and providing insights that enable informed decision-making. Their work ensures projects remain profitable while meeting all financial obligations to workers, suppliers, and stakeholders.'
    },
    {
      id: 'surveyors',
      title: 'Surveyors',
      responsibilities: [
        'Land measurement and boundary determination',
        'Site leveling and elevation mapping',
        'Setting out construction reference points',
        'Monitoring structural alignment during construction',
        'Preparing topographic surveys and reports'
      ],
      tasks: [
        'Conduct precise land measurements using surveying equipment',
        'Mark foundation corners and building lines',
        'Verify excavation depths and grades',
        'Create as-built drawings and documentation',
        'Ensure compliance with site plans and specifications'
      ],
      contribution: 'Surveyors provide the critical measurements and reference points that ensure construction proceeds according to plan. Their precision work establishes the exact positioning of foundations, structures, and site features, preventing costly errors and ensuring that every element is built in the correct location and at the proper elevation.'
    },
    {
      id: 'supervisors',
      title: 'Supervisors',
      responsibilities: [
        'Daily site operations management',
        'Worker coordination and task assignment',
        'Quality control and workmanship standards',
        'Safety protocol enforcement',
        'Progress monitoring and reporting'
      ],
      tasks: [
        'Conduct daily site briefings and safety talks',
        'Assign work crews to specific tasks',
        'Inspect completed work for quality',
        'Resolve on-site issues and conflicts',
        'Maintain site documentation and logs'
      ],
      contribution: 'Supervisors are the on-ground leaders who translate plans into action. They ensure that work proceeds efficiently, safely, and to the required quality standards by directing workers, solving problems in real-time, and maintaining constant communication between management and the workforce.'
    },
    {
      id: 'head-worker',
      title: 'Head Worker',
      responsibilities: [
        'Leading work crews and setting work pace',
        'Training and mentoring junior workers',
        'Equipment operation and maintenance oversight',
        'Material handling and inventory management',
        'First-line quality checks'
      ],
      tasks: [
        'Demonstrate proper work techniques',
        'Organize tools and materials for efficiency',
        'Perform skilled construction tasks',
        'Report equipment issues and material shortages',
        'Assist supervisors with crew coordination'
      ],
      contribution: 'Head workers bridge the gap between supervisors and laborers, providing hands-on leadership and technical expertise. Their experience and skill set the standard for quality workmanship, while their mentorship develops the capabilities of the entire workforce, ensuring consistent performance across all tasks.'
    },
    {
      id: 'labours',
      title: 'Labours',
      responsibilities: [
        'Executing assigned construction tasks',
        'Material handling and site preparation',
        'Operating basic construction equipment',
        'Maintaining site cleanliness and organization',
        'Following safety protocols and instructions'
      ],
      tasks: [
        'Excavation and ground preparation work',
        'Mixing and pouring concrete',
        'Loading and unloading materials',
        'Assisting skilled workers with various tasks',
        'Site cleanup and waste management'
      ],
      contribution: 'Labours form the essential workforce that brings construction projects to life through their physical effort and dedication. Their hard work in excavation, material handling, and supporting skilled trades ensures that projects progress on schedule, while their attention to safety and quality contributes to successful project outcomes.'
    }
  ];

  return (
    <Section id="team">
      <FounderOwnerBlock />

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the skilled professionals who make every project a success
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <RoleDetailsAccordion roles={roles} />
      </div>
    </Section>
  );
}
