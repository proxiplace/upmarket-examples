export type CustomerInitialize = {
    client_customer_id: String,
    journey_id: String,
    customer_type: String,
    customer_name: String
}

export type EventCreate = {
  journey_id: String;
  customer_id: String;
  event_id: String;
};
