import React, { MouseEvent, useState } from "react";
import { initializeCustomer, createEvent } from "../actions/upmarket";
import { EventCreate, CustomerInitialize } from "../types/customer.initialize";
import Events from "./Events";
import Login from "./Login";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /** Use to generate a generate a random client_customer_id */

  /** Add the following after the user is successfully logged in */
  async function handleLogin() {
    const customerInitializeData: CustomerInitialize = {
      client_customer_id: "example_customer_id", // This is the unique identifier from your system, use the 
      journey_id: "< Enter Journey Id here! >", // Upmarket Journey Id
      customer_type: "< `account` or `contact` >", // Customer are either an account or contact
      customer_name: "< Enter Customer Name here! >", // String identifying for your customer
    };
    await initializeCustomer(customerInitializeData);
  }

  /** Add the following whenever an event has occured */
  async function handleEventCreate(eventId: String) {
    const eventCreateData: EventCreate = {
      journey_id: "< Enter Journey Id here! >", // Upmarket Journey Id
      customer_id: "< Enter Customer Id here! >", // The customer_id returned from initializeCustomer()
      event_id: eventId, // The event_id representing the event you're creating
    };
    await createEvent(eventCreateData);
  }

  function onLoggedInClicked() {
    setIsLoggedIn(true);
    handleLogin();
  }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLoggedInClicked={onLoggedInClicked} />
      ) : (
        <Events handleEventCreate={handleEventCreate} />
      )}
    </>
  );
}

export default Home;
