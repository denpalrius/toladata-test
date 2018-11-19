export class Program {
  constructor(initialData: Partial<Program> = null) {
    if (initialData !== null) {
      Object.assign(this, initialData);
    }
  }

  url: string;
  id: number;
  status: string;
  budget: number | null;
  actuals: number | null;
  difference: number;
  level1_uuid: string;
  unique_id: null | string;
  name: string;
  funding_status: string;
  cost_center: null | string;
  description: string | null;
  public_dashboard: boolean;
  start_date: null | string;
  end_date: null | string;
  create_date: string;
  edit_date: string;
  sort: number;
  organization: string;
  portfolio: null;
  fund_code: any[];
  award: any[];
  sector: string[];
  sub_sector: string[];
  country: string[];
  milestone: string[];
  user_access: string[];
}
