import React, { MouseEvent, useState } from "react";
import { initializeLead, createEvent } from "../actions/upmarket";
import { EventCreate, LeadInitialize } from "../types/lead.initialize";
import Events from "./Events";
import Login from "./Login";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /** Use to generate a generate a random client_lead_id */

  /** Add the following after the user is successfully logged in */
  async function handleLogin() {
    const leadInitializeData: LeadInitialize = {
      client_lead_id: "example_lead_id", // This is the unique identifier from your system, use the 
      journey_id: "< Enter Journey Id here! >", // Upmarket Journey Id
      lead_type: "< `account` or `contact` >", // Leads are either an account or contact
      lead_name: "< Enter Lead Name here! >", // String identifying for your lead
    };
    await initializeLead(leadInitializeData);
  }

  /** Add the following whenever an event has occured */
  async function handleEventCreate(eventId: String) {
    const eventCreateData: EventCreate = {
      journey_id: "< Enter Journey Id here! >", // Upmarket Journey Id
      lead_id: "< Enter Lead Id here! >", // The lead_id returned from intializeLead()
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
