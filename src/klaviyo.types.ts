export type KlaviyoTrackProfile = Record<string, unknown> & {
  $email: string;
  $first_name: string;
  $last_name: string;
  $phone_number: string;
  $title: string;
  $organization: string;
  $city: string;
  $region: string;
  $country: string;
  $zip: string;
  $image: string;
  $consent: string | string[];
};

export type KlaviyoIdentifierType = 'email' | 'phone_number' | 'external_id';

export type KlaviyoProfile = Record<string, unknown> & {
  object: 'person';
  id: string;
  $id: string; // external ID
  $email: string;
  $first_name: string;
  $last_name: string;
  $phone_number: string;
  $title: string;
  $organization: string;
  $address1: string;
  $address2: string;
  $city: string;
  $region: string;
  $country: string;
  $zip: string;
  $image: string;
  $consent: string | string[];
  $consent_timestamp: string;
  $timezone: string;
};

export type KlaviyoProfileIdentifier = {
  id: string;
  email: string;
};

export type KlaviyoEventProperties = Record<string, unknown> & {
  $event_id: string;
  $value: number;
  $is_session_activity: boolean;
  $_cohort$message_send_cohort: string;
  $message: string;
  $message_interaction: string;
};

export type KlaviyoEvent<TP extends Record<string, unknown>, TE extends Record<string, unknown>> = {
  object: 'event';
  uuid: string;
  id: string;
  event_properties: KlaviyoEventProperties & TE;
  event_name: string;
  timestamp: number;
  datetime: string;
  person: KlaviyoProfile & TP;
  statistic_id: string;
};

export type KlaviyoListIdentifier = {
  list_id: string;
};

export type KlaviyoList = {
  list_id: string;
  list_name: string;
};

export type KlaviyoListDetails = {
  list_name: string;
  created: string;
  updated: string;
  folder_name: string;
};
