export const General = () => {
  return (
    <div>
      <div id="about">
        <h2>About</h2>
      </div>
      <div id="branding">
        <h3>Branding</h3>
        <p>
          Neighborhost provides neighbors with a platform to attend and plan
          events in their neighborhoods. It offers a singular point-of-reference
          social calendar for any size of locales to consolidate discovery of
          all events within these locales. It especially keeps in mind American
          suburbs, where there is usually a shortage of things to do within a
          walkable distance of these neighborhoods (e.g., No coffee shop? A
          neighbor in your neighborhood could host a pop-up coffee shop). It
          harnesses the power of our inherent creativity and believes in the
          potential that if we just create more opportunities that bring people
          together to exchange ideas, anything is possible.
        </p>
        <p>
          The experience of attending and planning events in one&#39;s
          neighborhood should be as frictionless as possible. Here is the basic
          flow through which neighbors can use the app:
        </p>
        <ol>
          <li>
            Neighbors search for events neighborhost will display by default.
          </li>
          <li>
            Neighbors interact with other neighbors about these events to help
            them make decisions about events to attend or plan (as opposed to
            neighbors having to use other apps along with neighborhost).
          </li>
          <li>
            Neighbors walk out of their doors to attend/host events and meet
            other neighbors.
          </li>
        </ol>
        <p id="antisocial">
          Note this flow is in stark contrast with other existing social apps.
          Instead of trying to keep neighbors on the app, it aims to get
          neighbors off and at events as quickly as possible.
        </p>
        <p>
          Design-wise, the only condition is to follow the traditional Korean
          color scheme called 오방색; these colors and in this order
          where/whenver possible: <label style={{ color: "blue" }}>blue</label>,{" "}
          <label style={{ color: "red" }}>red</label>,{" "}
          <label style={{ color: "yellow" }}>yellow</label>,{" "}
          <label style={{ color: "white", background: "black" }}>white</label>,
          and black. Features should be designed with function in mind over
          form. Otherwise, all creativity is encouraged.
        </p>
      </div>
      <div id="priorities">
        <h3>Priorities</h3>
        <p>
          To acheive this flow, below are the components needed to create a
          minimum viable produt (MVP):
        </p>
        <ol>
          <li>
            <a href="#main">Main view:</a>
            <br />
            <label>
              Neighbors should be able to view events in their general area
              without customization and create/login to their account.
            </label>
          </li>
          <br />
          <li>
            <a href="#login">Login functionality:</a>
            <br />
            <label>
              Neighbors should be able to create/login to their account using
              email, username, password, and zipcode and verify their identity
              using thier address.
            </label>
          </li>
          <br />
          <li>
            <a href="#events">Events view:</a>
            <br />
            <label>
              Neighbors should be able to customize search of events through
              list and calendar formats and learn event details.
              <ul>
                <br />
                <li>
                  Not logged in: While neighbors who are not logged in can
                  browse events on a limited basis, they should not be able to
                  see the exact location of the events or RSVP without an
                  account. If a neighbor tries to take these actions, they
                  should be prompted to create an account.
                </li>
                <br />
                <li>
                  Logged in: All logged in neighbors will be able to see events
                  closer to them via their zipcode, customize event browsing,
                  and RSVP to events. Unverified neighbors will have some
                  limitations, including being unable to host events, learn the
                  exact location of events, etc.
                </li>
                <br />
              </ul>
            </label>
          </li>
          <li>
            <a href="#friends">Friends view:</a>
            <br />
            <label>
              Neighbors should be able to send/accept friend requests and
              interact with friends with at least one differentiating feature
              that helps neighbors organize friend interactions.
            </label>
          </li>
          <br />
          <li>
            <a href="#profile">Profile view:</a>
            <br />
            <label>
              Neighbors should be able to see other neighbors&#39; profiles,
              displaying events that neighbor may be hosting.
            </label>
          </li>
          <br />
          <li>
            <a href="#analytics">Analytics</a>
            <br />
            <label>Neighborhost will never share/sell neighbor data.</label>
          </li>
        </ol>
        <p>
          In the <a href="#backofmind">last section</a> of this requirements
          document are some future considerations that should be kept in mind
          inasmuch as possible although they fall outside of the scope of the
          MVP.
        </p>
      </div>
    </div>
  );
};
