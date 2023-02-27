import React, { MouseEvent, useState } from "react";
import { initializeLead, createEvent } from "../actions/upmarket";
import { EventCreate, LeadInitialize } from "../types/lead.initialize";
import Events from "./Events";
import Login from "./Login";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /** Add the following after the user is successfully logged in */
  async function handleLogin() {
    const leadInitializeData: LeadInitialize = {
      client_lead_id: "< Enter Client Lead Id here! >",
      journey_id: "< Enter Journey Id here! >",
      lead_type: "< Enter Lead Type here! >",
      lead_name: "< Enter Lead Name here! >",
    };

    await initializeLead(leadInitializeData);
  }

  /** Add the following whenever an event has occured */
  async function handleEventCreate(eventType: String) {
    const eventCreateData: EventCreate = {
      journey_id: "< Enter Journey Id here! >",
      lead_id: "< Enter Lead Id here! >",
      event_id: eventType,
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
