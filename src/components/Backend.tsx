export const Backend = () => {
  return (
    <div>
      <div id="backend">
        <h2>Backend</h2>
      </div>
      <div id="endpoints">
        <h3>Endpoints</h3>
        <p>
          Prefix for API endpoints is "/api/v1". Endpoints with ".../auth"
          require neighbors to be authenticated in order to make requests.
        </p>
        <ul>
          <li>Addresses</li>
          <ul>
            <li>"/addresses/auth": GETS all addresses neighbors have saved.</li>
            <li>"/address/auth": POSTS new address neighbors save.</li>
          </ul>
          <li>Events</li>
          <ul>
            <li>
              "/events": GETS public events that start on and after current
              datetime, limit 10.
            </li>
            <li>
              "/events/auth": GETS events that match neighbors' zipcode that
              start on and after current datetime.
            </li>
            <li>
              "/events/location-filter/auth": POSTS neighbors' location filter
              choice and GETS events that match this choice.{" "}
              <label style={{ color: "red" }}>
                Need to edit to use search/query params.
              </label>
            </li>
            <li>
              "/events/date-filter/auth": POSTS neighbors' date filter choice
              and GETS events that match this choice{" "}
              <label style={{ color: "red" }}>
                Need to edit to use search/query params.
              </label>
            </li>
            <li>
              "/events/location-date-filter/auth": POSTS neighbors' location and
              date filter combination choice and GETS events that match this
              choice{" "}
              <label style={{ color: "red" }}>
                Need to edit to use search/query params.
              </label>
            </li>
            <li>
              "/events/create-event/auth": POSTS new event that neighbors plan.
            </li>
          </ul>
          <li>Neighbors</li>
          <ul>
            <li>"/auth/register": POSTS creation of a new neighbor.</li>
            <li>
              "/auth/login": POSTS neighbors' login information and returns
              token.
            </li>
            <li>"/auth/updatepassword": PUTS new password for neighbors.</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
