export const BackOfMind = () => {
  return (
    <div>
      <div id="backofmind">
        <h2>Things to keep in back of mind</h2>
        <p>
          While the following features will not make it into the MVP, some care
          should be taken when building the app such that these features can be
          easily integrated in later iterations of the app.
        </p>
      </div>
      <div id="business">
        <h3>Business</h3>
        <p>
          Neighborhost&#39;s ambition is not to be the next unicorn. That being
          said, it should still be a sustainable operation (i.e., revenue covers
          expenses and then some, pays our bills, etc.). Somewhat alluded to in
          the <a href="#antisocial">branding section</a>, neighborhost does also
          seek to stand contrary in the face of the exising social network
          landscape. Specifically, this means neighborhost will not run
          advertisements for as long as possible. These ideas combined arrive at
          the following business model choices that app features may need to
          built for:
        </p>
        <ul>
          <li>
            Franchise model: After proof-of-concept, efforts will be focused on
            selling franchise and software licensing rights to neighbors in
            suburbs across the country to launch neighborhost in their
            neighborhoods. Features-wise, franchise owners should have a
            low/no-code dashboard to give them advanced analytics for the
            neighbors in their neighborhoods as well as to help them manage
            events.
          </li>
          <br />
          <li>
            Cut of charging neighbor&#39;s events: Six months to a year after
            launch, neighborhost will take a cut of sales neighbors earn through
            events shared on neighborhost. Functionality will need to be built
            to track and process these payments.
          </li>
          <br />
          <li>
            Consulting: After launch, some time will be devoted to selling
            consulting services to neighbors, particularly but not limited to
            those running businesses in the neighborhood. Neighborhost data will
            not be shared/sold; analytics from neighborhost's data will be used
            to inform recommendations made to neighbors receiving consulting.
            New data sources beyond and detached from the scope of the core
            neighborhost platform will be developed as part of consulting and
            these are the only data neighbors receiving consulting will have
            access to (e.g., survey data, impact data from consulting, etc.).
          </li>
          <br />
          <li>
            Education: After launch, curriculum will be developed for various
            use cases (e.g, helping neighbors who want to host events but
            don&#39;t know where to start figure out what kind of event they
            could host, professional development to develop neighbors&#39;
            event-hosting skills, etc.). While much of this can be event-driven
            rather than relying on developing this programmatically,
            opportunities to use code to support this feature should be explored
            (e.g., training an OpenAI model to align responses with
            neighborhost's curriculum). This along with consulting and allowing
            neighbors to charge for events may be packaged up as part of a
            subscription offering in later iterations of the app.
          </li>
        </ul>
      </div>
      <div id="futureEvents">
        <h3>Events</h3>
        <ul>
          <li>
            Map view: Along with browsing for events via list and calendar,
            verified neighbors can use a map to customize their search for their
            next event.
          </li>
        </ul>
      </div>
      <div id="futureProfile">
        <h3>Profile</h3>
        <ul>
          <li>
            Attending events: If neighbors are friends, they should be able to
            see the events the other is going to in list, calendar, and
            eventually map form.
          </li>
        </ul>
      </div>
      <div id="chat">
        <h3>Chat</h3>
        <p>
          Once financing is secured, efforts should be devoted to building chat
          functionality between neighbors to provide a more frictionless
          experience in learning about and attending events.
        </p>
      </div>
    </div>
  );
};
