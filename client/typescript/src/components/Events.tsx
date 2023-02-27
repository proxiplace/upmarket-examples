import React, { MouseEventHandler, useState } from "react";

type EventsProps = {
  handleEventCreate: Function;
};

function Events(props: EventsProps) {
  const {handleEventCreate} = props;
  const [eventId, setEventId] = useState("sign_in");

  function onCreateEventClicked() {
    handleEventCreate(eventId);
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5" id="form1">
            <div className="form-data">
              <div className="forms-inputs mb-4">
                {" "}
                <span>Enter Event Type</span>
                <input
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  autoComplete="off"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-dark w-100"
                  onClick={onCreateEventClicked}
                >
                  Create Event
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
