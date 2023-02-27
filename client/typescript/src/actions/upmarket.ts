import axios from "axios";
import {LeadInitialize, EventCreate} from "../types/lead.initialize";

/**
 * Initialize a lead on user login
 *
 * For more info visit https://developers.upmarket.ai/api-reference/endpoints/leads/initialize
 */
async function initializeLead(leadInitializeData: LeadInitialize) {
    const LEAD_INITIALIZE_BACKEND_URL = "initialize-lead";
    const url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/${LEAD_INITIALIZE_BACKEND_URL}`;
    console.log("URL", url);
    const lead_id = await axios.post(url, leadInitializeData).data;
    // You must use the lead_id once you receive it, you can either save it in a cookie or to a database
}

/**
 * Create an event on upmarket
 *
 * For more info visit https://developers.upmarket.ai/api-reference/endpoints/events/create
 */
async function createEvent(eventCreateData: EventCreate) {
    const EVENT_CREATE_BACKEND_URL = "create-event";
    const url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/${EVENT_CREATE_BACKEND_URL}`
    await axios.post(url, eventCreateData);
}

export { 
    initializeLead,
    createEvent
};
