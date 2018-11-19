export class Activity {
  constructor(initialData: Partial<Activity> = null) {
    if (initialData !== null) {
      Object.assign(this, initialData);
    }
  }

  url: string;
  id: number;
  products: any[];
  contact: any;
  actual_start_date: string;
  actual_end_date: string;
  actual_duration: string;
  actual_cost: string;
  address: string;
  capacity_built: string;
  description: string;
  description_of_community_involvement: string;
  description_of_government_involvement: string;
  expected_end_date: string | string;
  expected_start_date: string | string;
  issues_and_challenges: string;
  justification_background: string;
  lessons_learned: string;
  level2_uuid: string;
  name: string;
  notes: string;
  parent_workflowlevel2: number;
  quality_assured: string;
  risks_assumptions: string;
  short_name: string;
  site_instructions: string;
  total_cost: string;
  total_estimated_budget: string;
  type: string;
  effect_or_impact: string;
  create_date: string;
  edit_date: string;
  status: string;
  progress: string;
  donor_currency: string;
  local_currency: string;
  milestone: string;
  office: string;
  sector: string;
  staff_responsible: string;
  workflowlevel1: string;
  created_by: string;
  approval: any[];
  indicators: any[];
  site: any[];
  stakeholder: any[];
  sub_sector: any[];
}
