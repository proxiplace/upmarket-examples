import axios from "axios";
import {CustomerInitialize, EventCreate} from "../types/customer.initialize";

/**
 * Initialize a customer on user login
 *
 * For more info visit https://developers.upmarket.ai/api-reference/endpoints/customers/initialize
 */
async function initializeCustomer(customerInitializeData: CustomerInitialize) {
    const CUSTOMER_INITIALIZE_BACKEND_URL = "initialize-customer";
    const url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/${CUSTOMER_INITIALIZE_BACKEND_URL}`;
    console.log("URL", url);
    const customer_id = await axios.post(url, customerInitializeData)
    // You must use the customer_id once you receive it, you can either save it in a cookie or to a database
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
    initializeCustomer,
    createEvent
};
