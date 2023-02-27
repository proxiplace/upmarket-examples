export type LeadInitialize = {
    client_lead_id: String,
    journey_id: String,
    lead_type: String,
    lead_name: String
}

export type EventCreate = {
  journey_id: String;
  lead_id: String;
  event_id: String;
};
