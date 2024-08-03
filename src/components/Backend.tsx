export const Backend = () => {
  return (
    <div>
      <div id="backend">
        <h2>Backend</h2>
      </div>
      <div id="endpoints">
        <h3>Endpoints</h3>
        <p>
          Prefix for API endpoints is &#34;/api/v1&#34;. Endpoints with
          &#34;.../auth&#34; require neighbors to be authenticated in order to
          make requests.
        </p>
        <ul>
          <li>Addresses</li>
          <ul>
            <li>
              &#34;/addresses/auth&#34;: GETS all addresses neighbors have
              saved.
            </li>
            <li>&#34;/address/auth&#34;: POSTS new address neighbors save.</li>
          </ul>
          <li>Events</li>
          <ul>
            <li>
              &#34;/events&#34;: GETS public events that start on and after
              current datetime, limit 10.
            </li>
            <li>
              &#34;/events/auth&#34;: GETS events that match neighbors&#39;
              zipcode that start on and after current datetime.
            </li>
            <li>
              &#34;/events/location-filter/auth&#34;: POSTS neighbors&#39;
              location filter choice and GETS events that match this choice.{" "}
              <label style={{ color: "red" }}>
                Need to edit to use search/query params.
              </label>
            </li>
            <li>
              &#34;/events/date-filter/auth&#34;: POSTS neighbors&#39; date
              filter choice and GETS events that match this choice{" "}
              <label style={{ color: "red" }}>
                Need to edit to use search/query params.
              </label>
            </li>
            <li>
              &#34;/events/location-date-filter/auth&#34;: POSTS neighbors&#39;
              location and date filter combination choice and GETS events that
              match this choice{" "}
              <label style={{ color: "red" }}>
                Need to edit to use search/query params.
              </label>
            </li>
            <li>
              &#34;/events/create-event/auth&#34;: POSTS new event that
              neighbors plan.
            </li>
          </ul>
          <li>Neighbors</li>
          <ul>
            <li>&#34;/auth/register&#34;: POSTS creation of a new neighbor.</li>
            <li>
              &#34;/auth/login&#34;: POSTS neighbors&#39; login information and
              returns token.
            </li>
            <li>
              &#34;/auth/updatepassword&#34;: PUTS new password for neighbors.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
