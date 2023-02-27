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
    
    await axios.post(url, leadInitializeData);
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
