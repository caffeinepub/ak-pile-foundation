import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface RoleDetail {
  id: string;
  title: string;
  responsibilities: string[];
  tasks: string[];
  contribution: string;
}

interface RoleDetailsAccordionProps {
  roles: RoleDetail[];
}

export function RoleDetailsAccordion({ roles }: RoleDetailsAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {roles.map((role) => (
        <AccordionItem
          key={role.id}
          value={role.id}
          className="border rounded-lg bg-card px-6 data-[state=open]:shadow-construction"
        >
          <AccordionTrigger className="text-lg font-semibold hover:text-primary hover:no-underline py-5">
            {role.title}
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 ml-4">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Typical Tasks
                </h4>
                <ul className="space-y-2 ml-4">
                  {role.tasks.map((task, idx) => (
                    <li key={idx} className="text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t">
                <h4 className="font-semibold text-foreground mb-2">Project Contribution</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {role.contribution}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
